export const pick = () => {
  const body = document.body;
  const hslDiv = document.createElement('div');
  hslDiv.className = 'hsl';
  body.appendChild(hslDiv);

  const hueDiv = document.createElement('div');
  hueDiv.className = 'hue text';
  body.appendChild(hueDiv);

  const luminosityDiv = document.createElement('div');
  luminosityDiv.className = 'luminosity text';
  body.appendChild(luminosityDiv);

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  body.appendChild(svg);

  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.id = 'axisX';
  axisX.setAttribute('stroke', 'white');
  svg.appendChild(axisX);

  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.id = 'axisY';
  axisY.setAttribute('stroke', 'white');
  svg.appendChild(axisY);

  const updateColor = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const hue = Math.round((clientX / innerWidth) * 360);
    const luminosity = Math.round((1 - clientY / innerHeight) * 100);
    const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

    body.style.backgroundColor = hslValue;
    hslDiv.textContent = hslValue;
    hueDiv.textContent = `hue\n${hue}`;
    luminosityDiv.textContent = `luminosity\n${luminosity}`;

    axisX.setAttribute('x1', clientX);
    axisX.setAttribute('x2', clientX);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('y2', '100%');

    axisY.setAttribute('x1', 0);
    axisY.setAttribute('x2', '100%');
    axisY.setAttribute('y1', clientY);
    axisY.setAttribute('y2', clientY);
  };

  const copyToClipboard = () => {
    const hslValue = hslDiv.textContent;
    navigator.clipboard.writeText(hslValue)
      .then(() => console.log('HSL value copied to clipboard'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  document.addEventListener('mousemove', updateColor);
  body.addEventListener('click', copyToClipboard);
};