import { styles } from './pimp-my-style.data.js'

let currentIndex = 0;
let isRemoving = false;

export function pimp() {
  const button = document.querySelector('.button');

  if (isRemoving) {
    if (currentIndex > 0) {
      currentIndex--;
      button.classList.remove(styles[currentIndex]);
    } else {
      isRemoving = false;
      button.classList.remove('unpimp');
    }

  } else {
    if (currentIndex < styles.length) {
      button.classList.add(styles[currentIndex]);
      currentIndex++;
      
      if (currentIndex === styles.length) {
        isRemoving = true;
        button.classList.add('unpimp');
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
