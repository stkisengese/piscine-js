import { gossips } from './gossip-grid.data.js';

export function grid() {
  const container = document.createElement('div');
  container.classList.add('gossip-container');
  document.body.appendChild(container);

  // Create the form for new gossip
  const formCard = document.createElement('div');
  formCard.classList.add('gossip');
  
  const form = document.createElement('form');
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Share your gossip here...';
  
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Share gossip!';
  
  form.appendChild(textarea);
  form.appendChild(submitButton);
  formCard.appendChild(form);
  
  container.appendChild(formCard);

  // Create gossip cards from imported data
  gossips.forEach(gossip => {
    const gossipCard = document.createElement('div');
    gossipCard.classList.add('gossip');
    gossipCard.textContent = gossip;
    container.appendChild(gossipCard);
  });

  // Create range inputs for dynamic styling
  const rangesDiv = document.createElement('div');
  rangesDiv.classList.add('ranges');

  const widthInput = document.createElement('input');
  widthInput.type = 'range';
  widthInput.id = 'width';
  widthInput.min = '200';
  widthInput.max = '800';
  widthInput.value = '400';  // Default value

  const fontSizeInput = document.createElement('input');
  fontSizeInput.type = 'range';
  fontSizeInput.id = 'fontSize';
  fontSizeInput.min = '20';
  fontSizeInput.max = '40';
  fontSizeInput.value = '24';  // Default value

  const backgroundInput = document.createElement('input');
  backgroundInput.type = 'range';
  backgroundInput.id = 'background';
  backgroundInput.min = '20';
  backgroundInput.max = '75';
  backgroundInput.value = '50';  // Default value

  rangesDiv.appendChild(widthInput);
  rangesDiv.appendChild(fontSizeInput);
  rangesDiv.appendChild(backgroundInput);

  document.body.appendChild(rangesDiv);

  // Function to update styles based on range inputs
  function updateStyles() {
    const width = widthInput.value + 'px';
    const fontSize = fontSizeInput.value + 'px';
    const backgroundLightness = backgroundInput.value + '%';
    const hslBackground = `hsl(0, 0%, ${backgroundLightness})`;

    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = width;
      card.style.fontSize = fontSize;
      card.style.backgroundColor = hslBackground;
    });
  }

  // Attach event listeners to range inputs
  widthInput.addEventListener('input', updateStyles);
  fontSizeInput.addEventListener('input', updateStyles);
  backgroundInput.addEventListener('input', updateStyles);

  // Initial style update
  updateStyles();

  // Handle form submission to add new gossip
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const newGossip = textarea.value.trim();
    if (newGossip) {
      const newGossipCard = document.createElement('div');
      newGossipCard.classList.add('gossip');
      newGossipCard.textContent = newGossip;
      container.appendChild(newGossipCard);
      textarea.value = '';  // Clear textarea
    }
  });
}
