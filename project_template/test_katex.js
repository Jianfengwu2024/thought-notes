const katex = require('katex');
const marked = require('marked');

// 测试公式渲染
const testCases = [
  {
    input: '行内公式：$E = mc^2$',
    expected: /<span data-md-type="math-inline">.*E = mc\^2.*<\/span>/
  },
  {
    input: '段落公式：$$\n\\int_a^b f(x)dx = F(b) - F(a)\n$$',
    expected: /<div data-md-type="math-block">.*\\int_a\^b f\(x\)dx = F\(b\) - F\(a\).*<\/div>/
  },
  {
    input: '矩阵：$$\n\\begin{pmatrix}\n1 & 2 \\\\\n3 & 4\n\\end{pmatrix}\n$$',
    expected: /<div data-md-type="math-block">.*\\begin\{pmatrix\}.*1 & 2.*3 & 4.*\\end\{pmatrix\}.*<\/div>/
  },
  {
    input: '特殊符号：$\\tilde{a}$ 和 $\\widetilde{a}$',
    expected: /<span data-md-type="math-inline">.*\\widetilde\{a\}.*<\/span>/
  }
];

// 运行测试
let passed = 0;
testCases.forEach((testCase, index) => {
  const result = marked.parse(testCase.input);
  if (testCase.expected.test(result)) {
    console.log(`✅ 测试用例 ${index + 1} 通过`);
    passed++;
  } else {
    console.log(`❌ 测试用例 ${index + 1} 失败`);
    console.log('预期匹配:', testCase.expected);
    console.log('实际结果:', result);
  }
});

console.log(`\n测试结果：${passed}/${testCases.length} 通过`);
if (passed === testCases.length) {
  console.log('所有公式渲染测试通过！');
  process.exit(0);
} else {
  console.log('部分测试未通过，请检查公式渲染逻辑');
  process.exit(1);
}
