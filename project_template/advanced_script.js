document.addEventListener('DOMContentLoaded', function() {
    const markdownInput = document.getElementById('markdown-input');
    const lineNumbers = document.querySelector('.line-numbers');

    // 更新行号
    function updateLineNumbers() {
        const lines = markdownInput.innerText.split('\n').length;
        lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => `<div>${i + 1}</div>`).join('');
    }

    // 同步滚动
    function syncScroll() {
        lineNumbers.scrollTop = markdownInput.scrollTop;
    }

    // 事件监听
    markdownInput.addEventListener('input', updateLineNumbers);
    markdownInput.addEventListener('scroll', syncScroll);

    // 初始化行号
    updateLineNumbers();
});
