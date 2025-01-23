// 初始化导航栏点击事件
function initNavigation() {
    document.querySelectorAll('.subcategory').forEach(subcategory => {
        // 如果已经初始化过则跳过
        if (subcategory.dataset.initialized) return;
        
        // 添加跳转链接
        const link = document.createElement('a');
        const parentCategory = subcategory.closest('.category').querySelector('.category-title').textContent;
        link.href = `../../${encodeURIComponent(parentCategory)}/${encodeURIComponent(subcategory.textContent)}/contents.html`;
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

        subcategory.addEventListener('click', function(e) {
            // 允许链接跳转
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }

            // 处理点击效果
            document.querySelectorAll('.subcategory').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 保存选中的分类
            localStorage.setItem('selectedCategory', this.dataset.id);
        });

        // 标记为已初始化
        subcategory.dataset.initialized = true;
    });
}

// 获取当前分类信息
function getCurrentCategory() {
    const path = window.location.pathname.split('/');
    return {
        category: decodeURIComponent(path[path.length - 3]),
        subcategory: decodeURIComponent(path[path.length - 2])
    };
}

// 获取笔记列表
async function fetchNoteList() {
    const { category, subcategory } = getCurrentCategory();
    try {
        const response = await fetch(`/api/notes?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
        if (!response.ok) throw new Error('获取笔记列表失败');
        return await response.json();
    } catch (error) {
        console.error('获取笔记列表失败:', error);
        return { success: false, data: [] };
    }
}

// 渲染笔记列表
function renderNoteList(notes) {
    const container = document.getElementById('note-list');
    if (!container) return;
    
    // 添加加载状态
    container.innerHTML = '<div class="loading">加载中...</div>';
    
    // 模拟延迟加载
    setTimeout(() => {
        if (notes.length === 0) {
            container.innerHTML = '<div class="empty">暂无笔记</div>';
            return;
        }
        
        container.innerHTML = notes.map(note => {
            // XSS防御：严格遵循OWASP标准HTML实体编码
            const safeTitle = note.title.replace(/[\u0000-\u001F&<>"'`(){}\[\]\\,;:%!@$^*+=|~]/g, 
                c => ({
                    '&': '&',
                    '<': '<',
                    '>': '>',
                    '"': '"',
                    "'": '&#x27;',
                    '`': '&#x60;',
                    '(': '&#40;',
                    ')': '&#41;',
                    '/': '&#x2F;',
                    '{': '&#123;',
                    '}': '&#125;',
                    '[': '&#91;',
                    ']': '&#93;',
                    '\\': '&#92;',
                    ',': '&#44;',
                    ';': '&#59;',
                    ':': '&#58;',
                    '%': '&#37;',
                    '!': '&#33;',
                    '@': '&#64;',
                    '$': '&#36;',
                    '^': '&#94;',
                    '*': '&#42;',
                    '+': '&#43;',
                    '=': '&#61;',
                    '|': '&#124;',
                    '~': '&#126;'
                }[c]) || `&#x${c.charCodeAt(0).toString(16).padStart(4, '0')};`);
            
            // 直接使用原始文件名
            const safeFilename = note.filename;
            
            // 格式化日期
            const formatDate = (dateStr) => {
                const date = new Date(dateStr);
                return isNaN(date) ? dateStr : 
                    `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')} ` +
                    `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`;
            };

            return `
            <div class="note-item" data-id="${safeFilename}">
                <div class="note-title">${safeTitle}</div>
                <div class="note-date">最后修改：${formatDate(note.modifiedTime)}</div>
                <div class="note-actions">
                    <button class="btn-view" data-filename="${safeFilename}">查看</button>
                    <button class="btn-edit" data-filename="${safeFilename}">编辑</button>
                    <button class="btn-delete" data-filename="${safeFilename}">删除</button>
                </div>
            </div>`; // 确保模板字符串正确闭合
        }).join('');
        
        // 添加排序功能
        const sortContainer = document.createElement('div');
        sortContainer.className = 'sort-container';
        sortContainer.innerHTML = `
            <span>排序：</span>
            <select id="sort-select">
                <option value="time-desc">按时间降序</option>
                <option value="time-asc">按时间升序</option>
                <option value="title-asc">按标题升序</option>
                <option value="title-desc">按标题降序</option>
            </select>
        `;
        container.prepend(sortContainer);
        
        // 处理排序
        document.getElementById('sort-select').addEventListener('change', (e) => {
            const sortType = e.target.value;
            let sortedNotes = [...notes];
            
            if (sortType.startsWith('time')) {
                sortedNotes.sort((a, b) => {
                    const dateA = new Date(a.modifiedTime);
                    const dateB = new Date(b.modifiedTime);
                    return sortType.endsWith('desc') ? dateB - dateA : dateA - dateB;
                });
            } else {
                sortedNotes.sort((a, b) => {
                    return sortType.endsWith('desc') ? 
                        b.title.localeCompare(a.title) : 
                        a.title.localeCompare(b.title);
                });
            }
            
            renderNoteList(sortedNotes);
        });
    }, 500); // 模拟500ms加载延迟
}

// 初始化笔记列表
async function initNoteList() {
    const result = await fetchNoteList();
    if (result.success) {
        renderNoteList(result.data);
    }
}

// 删除笔记
window.deleteNote = async function(noteId) {
    if (!confirm('确定要删除该笔记吗？')) return;
    
    try {
        // 直接使用原始ID
        const noteItem = document.querySelector(`.note-item[data-id='${noteId}']`);
        if (!noteItem) {
            throw new Error('未找到要删除的笔记');
        }

        // 先移除DOM元素
        noteItem.style.opacity = '0.5';
        noteItem.style.pointerEvents = 'none';

        const response = await fetch('/api/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filename: noteId
            })
        });
        
        const result = await response.json();
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(result.message || '未找到要删除的笔记');
            } else {
                throw new Error(result.message || '删除失败');
            }
        }
        
        // 强制刷新笔记列表
        const noteList = document.getElementById('note-list');
        if (noteList) {
            await initNoteList();
        }
        
        // 触发内容更新事件
        const event = new CustomEvent('contentUpdated');
        document.dispatchEvent(event);
    } catch (error) {
        console.error('删除笔记失败:', error);
        alert('删除笔记失败，请重试');
    }
}

// 编辑笔记
window.editNote = async function(filename) {
    console.log('正在编辑笔记:', filename);
    try {
        // 获取笔记原始内容和ID
        const { category, subcategory } = getCurrentCategory();
        const noteResponse = await fetch(`/api/notes?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
        if (!noteResponse.ok) throw new Error('获取笔记信息失败');
        
        const notes = await noteResponse.json();
        const note = notes.data.find(n => n.filename === filename);
        if (!note) throw new Error('未找到笔记信息');
        
        // 获取markdown内容
        const contentResponse = await fetch(filename.replace('.html', '.md'));
        if (!contentResponse.ok) throw new Error('获取笔记内容失败');
        const markdown = await contentResponse.text();
        
        // 跳转到index.html并传递markdown内容和note ID
        const encodedContent = encodeURIComponent(markdown);
        window.location.href = `../../../index.html?edit=${encodedContent}&id=${note.id}`;
        
    } catch (error) {
        console.error('编辑失败:', error);
        alert('编辑笔记失败: ' + error.message);
    }
}

// 更新笔记
window.updateNote = async function(noteId, content, markdownContent) {
    try {
        const { category, subcategory } = getCurrentCategory();
        const savePath = `${category}/${subcategory}`;
        
        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: noteId,
                category,
                subcategory,
                title: '', // 标题将从markdown内容中提取
                content,
                markdownContent,
                savePath
            })
        });
        
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || '更新失败');
        }
        
        // 触发内容更新事件
        const event = new CustomEvent('contentUpdated');
        document.dispatchEvent(event);
        
        return result;
    } catch (error) {
        console.error('更新笔记失败:', error);
        throw error;
    }
}

// 查看笔记内容
window.viewNote = async function(filename) {
    console.log('正在查看笔记:', filename);
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error('获取笔记内容失败');
        const html = await response.text();
        
        const mainContent = document.getElementById('html-output');
        if (!mainContent) {
            console.error('未找到html-output容器');
            alert('页面结构错误，请联系管理员');
            return;
        }
        
        console.log('成功获取笔记内容，正在渲染...');
        mainContent.innerHTML = html;
        console.log('笔记渲染完成');
    } catch (error) {
        console.error('查看笔记失败:', error);
        alert('查看笔记失败，请重试');
    }
}

// 安全事件处理
function initEventHandlers() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const filename = btn.dataset.filename;
        if (!filename) return;

        if (btn.classList.contains('btn-view')) {
            viewNote(filename);
        } else if (btn.classList.contains('btn-edit')) {
            editNote(filename);
        } else if (btn.classList.contains('btn-delete')) {
            deleteNote(filename);
        }
    });
}

// 初始化WebSocket连接
function initWebSocket() {
    const ws = new WebSocket(`ws://${window.location.host}`);
    
    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'fileChange') {
            // 强制刷新笔记列表
            const noteList = document.getElementById('note-list');
            if (noteList) {
                initNoteList();
            }
        }
    };
    
    ws.onclose = () => {
        console.log('WebSocket连接关闭，尝试重新连接...');
        setTimeout(initWebSocket, 5000);
    };
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('sidebar')) {
        initNavigation();
    }
    if (document.getElementById('note-list')) {
        initNoteList();
    }
    
    // 初始化main-content
    const mainContent = document.getElementById('html-output');
    if (mainContent) {
        mainContent.innerHTML = '<div class="empty">请从左侧选择笔记查看</div>';
    }

    // 初始化安全事件处理
    initEventHandlers();

    // 初始化WebSocket
    initWebSocket();

    // 添加内容更新监听器
    document.addEventListener('contentUpdated', async () => {
        const noteList = document.getElementById('note-list');
        if (noteList) {
            await initNoteList();
        }
    });
});
