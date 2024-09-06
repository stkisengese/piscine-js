import { colors } from './fifty-shades-of-cold.data.js'

function generateClasses() {
  const style = document.createElement('style')
  const classes = colors.map(color => `.${color} { background: ${color}; }`)
  style.textContent = classes.join('\n')
  document.head.appendChild(style)
}


// // Function to generate CSS classes for each color
// export function generateClasses() {
//   const styleTag = document.createElement('style');
//   document.head.appendChild(styleTag);
//   const styleSheet = styleTag.sheet;

//   colors.forEach((color) => {
//     // const className = color.replace(/\s+/g, '-').toLowerCase();
//      //style.sheet.insertRule(`.${className} { background: ${color}; }`, style.sheet.cssRules.length);
//     const rule = `.${color} { background: ${color}; }`;
//     styleSheet.insertRule(rule, styleSheet.cssRules.length);
//   });
// }

// Function to generate divs for cold shades
function generateColdShades() {
  const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

  colors.forEach((color) => {
    if (coldKeywords.some(keyword => color.includes(keyword))) {
      const colorDiv = document.createElement('div');
      colorDiv.className = color;
      colorDiv.textContent = color;
      document.body.appendChild(colorDiv);
    }
  });
}


// Function to handle clicks and replace all classes with the chosen shade
function choseShade(shade) {
  const divs = document.querySelectorAll('div');
   // const className = shade.replace(/\s+/g, '-').toLowerCase();
  divs.forEach((div) => {
    div.className = shade;
  });
}

export { generateClasses, generateColdShades, choseShade };

