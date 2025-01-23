// 提取并保存公式内容
function extractMath(content) {
    const mathBlocks = [];
    // 替换\tilde{}为\widetilde{}
    content = content.replace(/\\tilde\{([^}]*)\}/g, '\\widetilde{$1}');
    // 提取段落公式并添加data-md-type
    content = content.replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
        const trimmed = p1.trim();
        if (trimmed.length > 0) {
            const id = `math-block-${mathBlocks.length}`;
            mathBlocks.push(trimmed);
            return `<span data-md-type="math-block">${id}</span>`;
        }
        return ''; // 空公式块直接移除
    });
    return { content, mathBlocks };
}

// 渲染数学公式
function renderMath(content, mathBlocks) {
    // 渲染行内公式并添加data-md-type
    content = content.replace(/\$(.*?)\$/g, (match, p1) => {
        try {
            return `<span data-md-type="math-inline">${katex.renderToString(p1, { throwOnError: false })}</span>`;
        } catch (e) {
            return match;
        }
    });

    // 渲染段落公式
    mathBlocks.forEach((math, index) => {
        const id = `math-block-${index}`;
        try {
            const rendered = katex.renderToString(math, { displayMode: true, throwOnError: false });
            content = content.replace(`<span data-md-type="math-block">${id}</span>`, 
                `<div data-md-type="math-block">${rendered}</div>`);
        } catch (e) {
            content = content.replace(`<span data-md-type="math-block">${id}</span>`, 
                `<div data-md-type="math-block">$$${math}$$</div>`);
        }
    });

    // 添加math-tag类型
    content = content.replace(/(\\[a-zA-Z]+)/g, '<span data-md-type="math-tag">$1</span>');

    return content;
}

document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');
    const savePublishBtn = document.getElementById('save-publish-btn');
    const sidebar = document.getElementById('sidebar');

    // 检查是否是从编辑模式跳转过来
    const urlParams = new URLSearchParams(window.location.search);
    const editContent = urlParams.get('edit');
    const noteId = urlParams.get('id');
    
    // 如果是编辑模式，从localStorage获取内容
    if (editContent && noteId) {
        const decodedContent = decodeURIComponent(editContent);
            markdownInput.innerText = decodedContent;
            markdownInput.dispatchEvent(new Event('input'));
        
        // 保存编辑状态
        localStorage.setItem('editMode', 'true');
        localStorage.setItem('editNoteId', noteId);
        localStorage.setItem('editContent', decodedContent);

        // 修改保存按钮为保存修改
        savePublishBtn.textContent = '保存修改';
        savePublishBtn.style.backgroundColor = '#4CAF50';
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

        // 恢复Markdown内容
        const savedContent = localStorage.getItem('markdownContent');
        if (savedContent) {
            markdownInput.innerText = savedContent;
            markdownInput.dispatchEvent(new Event('input'));
        }
    }
    
    // 为每个分类项添加唯一标识符
    document.querySelectorAll('.subcategory').forEach((item, index) => {
        item.dataset.id = `category-${index}`;
    });
    
// 配置marked解析器
marked.use({
  extensions: [{
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
      return `<mark>${token.text}</mark>`;
    }
  }]
});

// 实时Markdown解析和自动保存
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.innerText;
    // 先提取公式
    const { content, mathBlocks } = extractMath(markdownText);
    // 先渲染公式
    const renderedContent = renderMath(content, mathBlocks);
    // 再解析Markdown
    let html = marked.parse(renderedContent);
        htmlOutput.innerHTML = html;
        
        // 自动保存Markdown内容
        localStorage.setItem('markdownContent', markdownText);
    });

    // 定期保存（每5秒）
    setInterval(() => {
        if (markdownInput.innerText) {
            localStorage.setItem('markdownContent', markdownInput.innerText);
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
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
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


    // 初始化示例内容
    const initialContent = `# 欢迎使用我的科学笔记

## 这是一个Markdown编辑器

- 支持**加粗**、*斜体*等格式
- 支持代码块：
\`\`\`javascript
function hello() {
    console.log('Hello World!');
}
\`\`\`
- 支持数学公式：
  行内公式：$E = mc^2$
  段落公式：
  $$
  \\int_a^b f(x)dx = F(b) - F(a)
  $$
  
  矩阵示例：
  $$
  \\begin{pmatrix}
  1 & 2 \\\\
  3 & 4
  \\end{pmatrix}
  $$

  多行对齐示例：
  $$
  \\begin{align}
  a &= b+c \\\\
  & = d-e
  \\end{align}
  $$

  查看 tilde 符号 $\\tilde{a}$ 的支持

  不带编号的多行对齐示例：
  $$
  \\begin{align*}
  a &= b+c \\\\
  & = d-e
  \\end{align*}
  $$
`;

    markdownInput.innerText = localStorage.getItem('editMode') === 'true' ? 
        localStorage.getItem('editContent') || initialContent : 
        initialContent;
    // 先提取公式
    const { content, mathBlocks } = extractMath(markdownInput.innerText);
    // 解析Markdown
    let html = marked.parse(content);
    // 渲染公式
    html = renderMath(html, mathBlocks);
    htmlOutput.innerHTML = html;
});
