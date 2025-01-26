// 新功能实现
(function() {
  'use strict';

  // 初始化新功能
  function initNewFeature() {
    const markdownInput = document.getElementById('markdown-input').textContent;
    const resultList = processMarkdown(markdownInput);
    console.log(resultList.slice(0, 20));
  }

  // 处理markdown内容
  function processMarkdown(input) {
    const result = [];
    let sentenceCounter = 1;
    let formulaCounter = 1;
    let buffer = '';
    let inFormula = false;
    let inInlineFormula = false;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const nextChar = input[i + 1];

      // 处理公式开始
      if (char === '$' && nextChar === '$') {
        inFormula = true;
        i++; // 跳过第二个$
        continue;
      } else if (char === '$') {
        inInlineFormula = true;
        continue;
      }

      // 处理公式结束
      if (inFormula && char === '$' && nextChar === '$') {
        inFormula = false;
        i++; // 跳过第二个$
        result.push(`mdinput-fid-${formulaCounter++}`);
        continue;
      } else if (inInlineFormula && char === '$') {
        inInlineFormula = false;
        continue;
      }

      // 处理普通文本
      if (!inFormula && !inInlineFormula) {
        // 处理句子结束符：英文句号、中文句号、换行符
        if (char === '.' || char === '。' || char === '\n') {
          if (buffer.trim().length > 0) {
            result.push(`mdinput-sid-${sentenceCounter++}`);
            buffer = '';
          }
          // 处理连续换行符
          if (char === '\n' && nextChar === '\n') {
            result.push(`mdinput-sid-${sentenceCounter++}`);
          }
        } else {
          buffer += char;
        }
      }
      // 在公式块前插入句子标记
      else if (inFormula && char === '$' && nextChar === '$') {
        if (buffer.trim().length > 0) {
          result.push(`mdinput-sid-${sentenceCounter++}`);
          buffer = '';
        }
      }
    }

    // 处理最后一段
    if (buffer.trim().length > 0) {
      result.push(`mdinput-sid-${sentenceCounter++}`);
    }

    return result;
  }

  // 文档加载完成后初始化
  document.addEventListener('DOMContentLoaded', function() {
    initNewFeature();
  });
})();
