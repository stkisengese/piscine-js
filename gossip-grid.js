import { gossips } from './gossip-grid.data.js';

export function grid() {
  const body = document.body;

  // Create and append the ranges div
  const rangesDiv = createRangesDiv();
  body.appendChild(rangesDiv);

  // Create and append the gossip container
  const gossipContainer = document.createElement('div');
  gossipContainer.className = 'gossip-container';
  body.appendChild(gossipContainer);

  // Display existing gossips
  gossips.forEach(gossip => addGossipCard(gossip, gossipContainer));

  // Create and append the form for new gossip
  const form = createGossipForm();
  gossipContainer.appendChild(form);
  
  // Function to create the ranges div
  function createRangesDiv() {
    const div = document.createElement('div');
    div.className = 'ranges';

    const widthRange = createRangeInput('width', 200, 800);
    const fontSizeRange = createRangeInput('fontSize', 20, 40);
    const backgroundRange = createRangeInput('background', 20, 75);

    div.appendChild(widthRange);
    div.appendChild(fontSizeRange);
    div.appendChild(backgroundRange);

    return div;
  }

  // Function to create range input
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

  // Function to create the gossip form
  function createGossipForm() {
    const form = document.createElement('form');
    form.className = 'gossip';

    const textarea = document.createElement('textarea');
    form.appendChild(textarea);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Share gossip!';
    form.appendChild(submitButton);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const newGossip = textarea.value.trim();
      if (newGossip) {
        addGossipCard(newGossip, gossipContainer);
        textarea.value = '';
      }
    });

    return form;
  }

  // Function to add a gossip card
  function addGossipCard(text, container) {
    const gossipCard = document.createElement('div');
    gossipCard.className = 'gossip';
    gossipCard.textContent = text;
    container.appendChild(gossipCard);
  }

  // Function to update styles based on range inputs
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
