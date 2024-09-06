export function generateLetters() {
  const container = document.body;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Loop to create new 120 divs elements
  for (let i = 0; i < 120; i++) {
    const div = document.createElement("div");
    // const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    div.textContent = letter;

    const fontSize = 11 + (119 * i) / 119; // Smooth transition from 11 to 130 pixels
    div.style.fontSize = `${fontSize}px`;

    // Set font-weight
    const weight = i < 40 ? 300 : i < 80 ? 400 : 600;
    div.style.fontWeight = weight;
    // if (i < 40) {
    //     div.style.fontWeight = '300';
    // } else if (i < 80) {
    //     div.style.fontWeight = '400';
    // } else {
    //     div.style.fontWeight = '600';
    // }

    container.appendChild(div);
  }
}
