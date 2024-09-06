import { styles } from './pimp-my-style.data.js'

let index = 0
let isAdding = true

export function pimp() {
  const button = document.querySelector('.button')
  
  if (isAdding) {
    if (index < styles.length) {
      button.classList.add(styles[index])
      index++
      if (index === styles.length) {
        isAdding = false
        button.classList.add('unpimp')
      }
    }
  } else {
    if (index > 0) {
      index--
      button.classList.remove(styles[index])
      if (index === 0) {
        isAdding = true
        button.classList.remove('unpimp')
      }
    }
  }
}

// import { styles } from './pimp-my-style.data.js';

// let index = 0;  
// let isAdding = true;  

// export function pimp() {
//   const button = document.querySelector('.button');

//   if (!isAdding) button.classList.toggle('unpimp');  

//     isAdding ? button.classList.add(styles[index]) : button.classList.remove(styles[index]);

//     index += isAdding ? 1 : -1;

//     if (index >= styles.length || index < 0) {
//         isAdding = !isAdding;
//         index = isAdding ? 0 : styles.length - 1;  // Reset index for adding or removing classes as needed.
//         //button.classList.toggle('unpimp');  
//     }
// }Usage failing to on toggling unpimp buttons
