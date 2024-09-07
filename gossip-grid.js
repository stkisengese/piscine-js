import { gossips } from './gossip-grid.data.js';

export function grid() {
  const body = document.body;

  const rangesDiv = document.createElement('div');
  rangesDiv.className = 'ranges';

  // range inputs
  const widthRange = createRangeInput('width', 200, 800);
  const fontSizeRange = createRangeInput('fontSize', 20, 40);
  const backgroundRange = createRangeInput('background', 20, 75);

  // Append range inputs to ranges div
  rangesDiv.appendChild(widthRange);
  rangesDiv.appendChild(fontSizeRange);
  rangesDiv.appendChild(backgroundRange);

  // Append ranges div to body
  body.appendChild(rangesDiv);

  // form for new gossip
  const form = document.createElement('form');
  form.className = 'gossip';

  const textarea = document.createElement('textarea');
  form.appendChild(textarea);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Share gossip!';
  form.appendChild(submitButton);

  // Append form to body
  body.appendChild(form);

  // Add event listener to form
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newGossip = textarea.value.trim();
    if (newGossip) {
      addGossipCard(newGossip);
      textarea.value = '';
    }
  });

  // Display gossips
  gossips.forEach(addGossipCard);

  function createRangeInput(id, min, max) {
    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'range';
    input.id = id;
    input.min = min;
    input.max = max;
    input.addEventListener('input', updateStyles);
    return input;
  }

  function addGossipCard(text) {
    const gossipCard = document.createElement('div');
    gossipCard.className = 'gossip';
    gossipCard.textContent = text;
    body.appendChild(gossipCard);
  }

  function updateStyles() {
    const width = document.getElementById('width').value;
    const fontSize = document.getElementById('fontSize').value;
    const background = document.getElementById('background').value;

    document.querySelectorAll('.gossip').forEach((gossip) => {
      gossip.style.width = `${width}px`;
      gossip.style.fontSize = `${fontSize}px`;
      gossip.style.backgroundColor = `hsl(280, 50%, ${background}%)`;
    });
  }
}
