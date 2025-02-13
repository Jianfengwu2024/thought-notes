document.addEventListener('DOMContentLoaded', function() {
    const markdownInput = document.getElementById('markdown-input');
    const lineNumbers = document.querySelector('.line-numbers');

    // 更新行号
    function updateLineNumbers() {
        console.log('updateLineNumbers triggered');
        const lines = markdownInput.innerText.split('\n').length;
        lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => `<div>${i + 1}</div>`).join('');
    }

    // 同步滚动
    function syncScroll() {
        lineNumbers.scrollTop = markdownInput.scrollTop;
    }

    // 优化更新行号函数
    let updateTimeout;
    function debouncedUpdateLineNumbers() {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(updateLineNumbers, 50);
    }

    // 事件监听
    markdownInput.addEventListener('input', debouncedUpdateLineNumbers);
    markdownInput.addEventListener('keydown', debouncedUpdateLineNumbers);
    markdownInput.addEventListener('paste', debouncedUpdateLineNumbers);
    markdownInput.addEventListener('cut', debouncedUpdateLineNumbers);
    markdownInput.addEventListener('scroll', syncScroll);

    // 初始化行号
    debouncedUpdateLineNumbers();

    // 添加上传笔记事件监听
    const uploadBtn = document.getElementById('upload-note-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', debouncedUpdateLineNumbers);
    }
});
