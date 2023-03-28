/*

Codewars, 7k: Generating Markdowns

*/

function generateMarkdowns(markdown,text,urlOrLanguage) {
  if (markdown === 'link') {
    return `[${text}](${urlOrLanguage})`;
  }
  
  if (markdown === 'img') {
    return `![${text}](${urlOrLanguage})`;
  }
  
  return `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``;
};