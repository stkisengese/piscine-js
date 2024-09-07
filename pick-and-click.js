export function pick() {
  const hslDiv = document.createElement('div');
  hslDiv.className = 'hsl text';
  document.body.appendChild(hslDiv);

  const hueDiv = document.createElement('div');
  hueDiv.className = 'hue text';
  document.body.appendChild(hueDiv);

  const luminosityDiv = document.createElement('div');
  luminosityDiv.className = 'luminosity text';
  document.body.appendChild(luminosityDiv);

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, 'svg');
  document.body.appendChild(svg);

  const axisX = document.createElementNS(svgNS, 'line');
  axisX.setAttribute('id', 'axisX');
  axisX.setAttribute('stroke', 'white');
  svg.appendChild(axisX);

  const axisY = document.createElementNS(svgNS, 'line');
  axisY.setAttribute('id', 'axisY');
  axisY.setAttribute('stroke', 'white');
  svg.appendChild(axisY);

  document.addEventListener('mousemove', (event) => {
      const hue = Math.round((event.clientX / window.innerWidth) * 360);
      const luminosity = Math.round((event.clientY / window.innerHeight) * 100);
      const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

      document.body.style.backgroundColor = hslValue;
      hslDiv.textContent = hslValue;
      hueDiv.textContent = `Hue:\n${hue}`;
      luminosityDiv.textContent = `Luminosity\n${luminosity}%`;

      axisX.setAttribute('x1', clientX);
      axisX.setAttribute('x2', clientX);
      axisX.setAttribute('y1', 0);
      axisX.setAttribute('y2', '100%');

      axisY.setAttribute('x1', 0);
      axisY.setAttribute('x2', '100%');
      axisY.setAttribute('y1', clientY);
      axisY.setAttribute('y2', clientY);
  });

  document.addEventListener('click', () => {
      const hslValue = hslDiv.textContent;
      navigator.clipboard.writeText(hslValue).then(() => {
          alert(`Copied to clipboard: ${hslValue}`);
      });
  });
}
