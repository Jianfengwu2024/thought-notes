// 配置marked解析器
marked.use({
  extensions: [{
    name: 'mathInline',
    level: 'inline',
    start(src) { return src.match(/\$/)?.index; },
    tokenizer(src, tokens) {
      const rule = /^\$([^$]+)\$/;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'mathInline',
          raw: match[0],
          text: match[1].trim()
        };
      }
    },
    renderer(token) {
      try {
        // 预处理特殊符号
        const processedText = token.text
          .replace(/\\tilde\{([^}]*)\}/g, '\\widetilde{$1}')
          .replace(/\\hat\{([^}]*)\}/g, '\\widehat{$1}');
          
        return `<span data-md-type="math-inline">${katex.renderToString(processedText, {
          throwOnError: false,
          strict: false,
          macros: {
            "\\RR": "\\mathbb{R}",
            "\\CC": "\\mathbb{C}",
            "\\ZZ": "\\mathbb{Z}",
            "\\NN": "\\mathbb{N}",
            "\\QQ": "\\mathbb{Q}"
          }
        })}</span>`;
      } catch (e) {
        console.error('Inline math rendering error:', e);
        return `<span class="math-error">${token.raw}</span>`;
      }
    }
  }, {
    name: 'mathBlock',
    level: 'block',
    start(src) { return src.match(/\$\$/)?.index; },
    tokenizer(src, tokens) {
      const rule = /^\$\$([\s\S]*?)\$\$/;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'mathBlock',
          raw: match[0],
          text: match[1].trim()
        };
      }
    },
    renderer(token) {
      try {
        // 预处理特殊符号
        const processedText = token.text
          .replace(/\\tilde\{([^}]*)\}/g, '\\widetilde{$1}')
          .replace(/\\hat\{([^}]*)\}/g, '\\widehat{$1}');
          
        return `<div data-md-type="math-block">${katex.renderToString(processedText, {
          displayMode: true,
          throwOnError: false,
          strict: false,
          macros: {
            "\\RR": "\\mathbb{R}",
            "\\CC": "\\mathbb{C}",
            "\\ZZ": "\\mathbb{Z}",
            "\\NN": "\\mathbb{N}",
            "\\QQ": "\\mathbb{Q}"
          }
        })}</div>`;
      } catch (e) {
        console.error('Block math rendering error:', e);
        return `<div class="math-error">${token.raw}</div>`;
      }
    }
  },
  {
    name: 'highlight',
    level: 'inline',
    start(src) { return src.match(/==/)?.index; },
    tokenizer(src, tokens) {
      const rule = /^==([^=]+)==/;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'highlight',
          raw: match[0],
          text: match[1].trim()
        };
      }
    },
    renderer(token) {
      // Re-parse the highlighted text to handle additional markdown, such as inline math
      return `<span class="highlight">${marked.parseInline(token.text)}</span>`;
    }
  },
  {
    name: 'boldHighlight',
    level: 'inline',
    start(src) { return src.match(/==\*\*/)?.index; },
    tokenizer(src, tokens) {
      const rule = /^==\*\*([^=]+)\*\*==/;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'boldHighlight',
          raw: match[0],
          text: match[1].trim()
        };
      }
    },
    renderer(token) {
      // Re-parse the bold highlighted text to handle additional markdown, such as inline math
      return `<span class="highlight"><strong>${marked.parseInline(token.text)}</strong></span>`;
    }
  }]
});

// 添加页面上的监听器
document.addEventListener('DOMContentLoaded', () => {
  const uploadBtn = document.getElementById('upload-note-btn');
  const uploadDialog = document.getElementById('upload-dialog');
  const cancelUploadBtn = document.getElementById('cancel-upload'); // Assuming this is the ID of the cancel button
  const fileInput = document.getElementById('file-input');
  const confirmUploadBtn = document.getElementById('confirm-upload');
  const markdownInput = document.getElementById('markdown-input');
  const htmlOutput = document.getElementById('html-output');
  const savePublishBtn = document.getElementById('save-publish-btn');
  const sidebar = document.getElementById('sidebar');

  // 确保元素可见
  markdownInput.style.display = 'block';
  htmlOutput.style.display = 'block';

  // 渲染Markdown内容
  const renderMarkdown = () => {
    // 替换\tilde{}为\widetilde{}
    let processedText = markdownInput.innerText
        .replace(/\\tilde\{([^}]*)\}/g, '\\widetilde{$1}')
        .replace(/\\tilde\s+([a-zA-Z])/g, '\\widetilde{$1}'); // Handle \tilde x
    
    // 解析标签和自动编号
    const labels = {};
    let equationNumber = 0;
    processedText = processedText.replace(/(\\begin\{[a-zA-Z*]+\}[\s\S]*?\\end\{[a-zA-Z*]+\})|(\$\$[\s\S]*?\$\$)/g, (match) => {
      const labelMatch = match.match(/\\label\{([^}]*)\}/);
      if (labelMatch) {
        equationNumber++;
        labels[labelMatch[1]] = equationNumber;
        match = match.replace(labelMatch[0], ''); // Remove the label from the content
        return match.replace(/(\$\$|\\end\{[a-zA-Z*]+\})$/, `\\tag{${equationNumber}}$1`);
      }
      return match;
    });
    // 处理引用
    processedText = processedText.replace(/\\ref\{([^}]*)\}/g, (match, ref) => {
        return labels[ref] ? labels[ref] : '?'; // Replace with label number or '?' if not found
    });

    // 解析Markdown并渲染公式
    const html = marked.parse(processedText);
    htmlOutput.innerHTML = html;
    };
    
    // 监听输入事件
    markdownInput.addEventListener('input', () => {
    renderMarkdown();
    });

    // 初始渲染
    renderMarkdown();

  // 检查URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const isEditMode = urlParams.get('editMode') === 'true';
  // 弹出文件上传对话框
  uploadBtn.addEventListener('click', () => {
      uploadDialog.style.display = 'block';  // 显示对话框
  });

  // 监听文件选择
  fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];

      // 如果选择了文件，则启用确认上传按钮
      if (selectedFile && selectedFile.name.endsWith('.md')) {
          confirmUploadBtn.disabled = false;
      } else {
          confirmUploadBtn.disabled = true;  // 非.md文件禁用按钮
      }
  });

  // 处理文件上传
  confirmUploadBtn.addEventListener('click', async () => {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
          const reader = new FileReader();

          // 读取文件内容并将其显示到 markdownInput 区域
          reader.onload = function (e) {
              markdownInput.innerText = e.target.result;
              uploadDialog.style.display = 'none';  // 隐藏对话框
          };

          reader.readAsText(selectedFile);  // 读取文件内容
      }
  });

    // 确保取消按钮始终可点击
    cancelUploadBtn.disabled = false;

    // 添加取消按钮的点击事件监听器
    cancelUploadBtn.addEventListener('click', () => {
        uploadDialog.style.display = 'none'; // 隐藏对话框
    });



    if (!markdownInput || !htmlOutput) {
        console.error('Required elements not found');
        return;
    }


    // 如果是编辑模式，从localStorage获取内容
    if (isEditMode) {
        const noteId = localStorage.getItem('editNoteId');
        const editContent = localStorage.getItem('editContent');
        
        if (noteId && editContent) {
            markdownInput.innerText = editContent;
            markdownInput.dispatchEvent(new Event('input'));

            // 修改保存按钮为保存修改
            savePublishBtn.textContent = '保存修改';
            savePublishBtn.style.backgroundColor = '#4CAF50';
        }
    } else {
        // 清除编辑状态
        localStorage.removeItem('editMode');
        localStorage.removeItem('editNoteId');
        localStorage.removeItem('editContent');
    }
    
    // 如果是index.html页面，显示编辑器
    if (window.location.pathname.endsWith('index.html') && markdownInput) {
        markdownInput.style.display = 'block';
        htmlOutput.style.display = 'block';
    }
    
    // 初始化导航栏
    if (sidebar) {
        initNavigation();
    }

    // 监听URL变化
    window.addEventListener('popstate', () => {
        if (window.location.pathname.endsWith('index.html') && markdownInput) {
            markdownInput.style.display = 'block';
            htmlOutput.style.display = 'block';
        }
    });

    // 如果是index.html页面，初始化markdown编辑器
    if (markdownInput && htmlOutput) {
        // 设置初始内容
        if (localStorage.getItem('editMode') === 'true') {
            markdownInput.innerText = localStorage.getItem('editContent') || '';
        }
        // 替换\tilde{}为\widetilde{}
        const processedText = markdownInput.innerText.replace(/\\tilde\{([^}]*)\}/g, '\\widetilde{$1}');
        // 解析Markdown并渲染公式
        const html = marked.parse(processedText);
        htmlOutput.innerHTML = html;
        // 恢复侧边栏宽度
        const savedNavWidth = localStorage.getItem('navWidth');
        if (savedNavWidth) {
            sidebar.style.width = savedNavWidth;
        }

        // 监听侧边栏宽度变化
        new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width + 'px';
                localStorage.setItem('navWidth', width);
            }
        }).observe(sidebar);

        // 恢复选中的分类
        const savedCategory = localStorage.getItem('selectedCategory');
        if (savedCategory) {
            const categoryItem = document.querySelector(`.subcategory[data-id="${savedCategory}"]`);
            if (categoryItem) {
                categoryItem.click();
            }
        }
    }
    
    // 为每个分类项添加唯一标识符
    document.querySelectorAll('.subcategory').forEach((item, index) => {
        item.dataset.id = `category-${index}`;
    });
    

// 实时Markdown解析和自动保存
let lastRenderedContent = '';
let isRendering = false;

// 防抖处理
let renderTimeout;
markdownInput.addEventListener('input', () => {
    clearTimeout(renderTimeout);
    renderTimeout = setTimeout(renderMarkdown, 300);
});

// 定期保存（每5秒）
setInterval(() => {
    if (markdownInput.innerText && markdownInput.innerText !== lastRenderedContent) {
        renderMarkdown();
    }
}, 5000);

    // 获取对话框相关元素
    const dialog = document.getElementById('category-dialog');
    const mainCategorySelect = document.getElementById('main-category');
    const subCategorySelect = document.getElementById('sub-category');
    const confirmSaveBtn = document.getElementById('confirm-save');
    const cancelSaveBtn = document.getElementById('cancel-save');

    // 动态生成分类选项
    function populateCategories() {
        // 清空现有选项
        mainCategorySelect.innerHTML = '';
        subCategorySelect.innerHTML = '';

        // 获取所有主分类
        const mainCategories = document.querySelectorAll('.category-title');
        mainCategories.forEach((category, index) => {
            // 添加主分类选项
            const option = document.createElement('option');
            option.value = category.textContent;
            option.textContent = category.textContent;
            mainCategorySelect.appendChild(option);

            // 默认选择第一个主分类
            if (index === 0) {
                populateSubcategories(category);
            }
        });

        // 监听主分类变化
        mainCategorySelect.addEventListener('change', (e) => {
            const selectedCategory = mainCategories[e.target.selectedIndex];
            populateSubcategories(selectedCategory);
        });
    }

    // 动态生成子分类选项
    function populateSubcategories(category) {
        // 清空现有选项
        subCategorySelect.innerHTML = '';

        // 获取当前主分类下的所有子分类
        const subCategories = category.parentElement.querySelectorAll('.subcategory');
        subCategories.forEach(subcategory => {
            const option = document.createElement('option');
            option.value = subcategory.textContent;
            option.textContent = subcategory.textContent;
            subCategorySelect.appendChild(option);
        });
    }

    // 初始化导航栏点击事件
    function initNavigation() {
        document.querySelectorAll('.subcategory').forEach(subcategory => {
            // 如果已经初始化过则跳过
            if (subcategory.dataset.initialized) return;
            
            // 添加跳转链接
            const link = document.createElement('a');
            const parentCategory = subcategory.closest('.category').querySelector('.category-title').textContent;
            link.href = `notes/${encodeURIComponent(parentCategory)}/${encodeURIComponent(subcategory.textContent)}/contents.html`;
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
            link.style.display = 'block';
            link.style.width = '100%';
            link.style.height = '100%';
            
            // 将子分类内容移动到链接中
            while (subcategory.firstChild) {
                link.appendChild(subcategory.firstChild);
            }
            subcategory.appendChild(link);

            subcategory.addEventListener('click', async function(e) {
                // 允许链接跳转
                const link = this.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }

                // 处理点击效果
                document.querySelectorAll('.subcategory').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // 保存选中的分类
                const category = this.closest('.category').querySelector('.category-title').textContent;
                const subcategoryName = this.textContent;
                localStorage.setItem('selectedCategory', this.dataset.id);

                // 如果是index.html页面，保持编辑器可见
                if (document.getElementById('markdown-input')) {
                    document.getElementById('markdown-input').style.display = 'block';
                    document.getElementById('html-output').style.display = 'block';
                }
            });

            // 标记为已初始化
            subcategory.dataset.initialized = true;
        });
    }

    // 初始化导航栏
    if (document.getElementById('sidebar')) {
        initNavigation();
    }

    // 保存并发布功能
    savePublishBtn.addEventListener('click', () => {
        // 检查内容大小
        const contentSize = new Blob([markdownInput.innerText]).size;
        if (contentSize > 5 * 1024 * 1024) { // 5MB limit
            alert('内容过大，请分成多个笔记保存');
            return;
        }
        
        // 检查压缩后大小
        const compressedSize = new Blob([LZString.compressToUTF16(markdownInput.innerText)]).size;
        if (compressedSize > 2 * 1024 * 1024) { // 2MB compressed limit
            alert('压缩后内容仍然过大，请分成多个笔记保存');
            return;
        }

        // 添加分块压缩支持
        const compressInChunks = (text, chunkSize = 1024 * 1024) => {
            const chunks = [];
            for (let i = 0; i < text.length; i += chunkSize) {
                chunks.push(LZString.compressToUTF16(text.slice(i, i + chunkSize)));
            }
            return chunks;
        };

        // 显示对话框并初始化分类选项
        dialog.style.display = 'block';
        populateCategories();
    });

    // 取消保存
    cancelSaveBtn.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    // 确认保存
    confirmSaveBtn.addEventListener('click', async () => {
        const category = mainCategorySelect.value;
        const subcategory = subCategorySelect.value;

        // 提取Markdown标题
        const titleMatch = markdownInput.innerText.match(/^#\s+(.+)/m);
        const title = titleMatch ? 
            titleMatch[1].trim().replace(/[\\/:*?"<>|]/g, '_') : 
            '未命名笔记';

        // 隐藏对话框
        dialog.style.display = 'none';

        try {
            // 检查是否是编辑模式
            const isEditMode = localStorage.getItem('editMode') === 'true';
            const noteId = localStorage.getItem('editNoteId');
            const endpoint = isEditMode ? 'http://localhost:3000/api/update' : 'http://localhost:3000/api/save';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    compressed: true,
                    id: noteId,
                    category,
                    subcategory,
                    title,
                    content: htmlOutput.innerHTML,
                    markdownContent: markdownInput.innerText || '',
                    savePath: `${category}/${subcategory}`,
                    isEdit: isEditMode
                })
            });

            const result = await response.json();
            if (result.success) {
                // 显示保存成功提示
                const toast = document.createElement('div');
                toast.textContent = result.message;
                toast.style.position = 'fixed';
                toast.style.bottom = '20px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.backgroundColor = '#4caf50';
                toast.style.color = 'white';
                toast.style.padding = '12px 24px';
                toast.style.borderRadius = '25px';
                toast.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                toast.style.zIndex = '1000';
                toast.style.animation = 'fadeInOut 3s ease-in-out';
                
                document.body.appendChild(toast);
                
                // 通过API刷新笔记列表
                const targetCategory = document.querySelector(`a[href*="${category}/${subcategory}/contents.html"]`);
                if (targetCategory) {
                    // 使用fetch重新获取最新数据
                    const refreshNotes = async () => {
                        try {
                            const response = await fetch(targetCategory.href);
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(await response.text(), 'text/html');
                            const noteList = doc.getElementById('note-list');
                            
                // 更新当前页面的笔记列表
                const localNoteList = document.getElementById('note-list');
                if (localNoteList) {
                    // 清理多余的闭合标签
                    const cleanedHTML = noteList.innerHTML;
                    localNoteList.innerHTML = cleanedHTML;
                    document.dispatchEvent(new Event('contentUpdated'));
                }
                        } catch (error) {
                            console.error('刷新笔记列表失败:', error);
                        }
                    };
                    
                    // 立即刷新并设置定时器保持同步
                    refreshNotes();
                    setTimeout(refreshNotes, 3000);
                }

                // 3秒后移除提示
                setTimeout(() => {
                    toast.remove();
                }, 3000);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            const toast = document.createElement('div');
            toast.textContent = '保存失败：' + error.message;
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.backgroundColor = '#f44336';
            toast.style.color = 'white';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '25px';
            toast.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            toast.style.zIndex = '1000';
            toast.style.animation = 'fadeInOut 3s ease-in-out';
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }
    });

});
