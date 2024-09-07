export function pick() {
  const body = document.body;

  const hslDiv = document.createElement("div");
  hslDiv.className = "hsl";
  body.appendChild(hslDiv);

  const hueDiv = document.createElement("div");
  hueDiv.className = "hue text";
  body.appendChild(hueDiv);

  const luminosityDiv = document.createElement("div");
  luminosityDiv.className = "luminosity text";
  body.appendChild(luminosityDiv);

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  body.appendChild(svg);

  const axisX = document.createElementNS(svgNS, "line");
  axisX.id = "axisX";
  axisX.setAttribute("stroke", "white");
  svg.appendChild(axisX);

  const axisY = document.createElementNS(svgNS, "line");
  axisY.id = "axisY";
  axisY.setAttribute("stroke", "white");
  svg.appendChild(axisY);

  const updateColor = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate hue and luminosity based on mouse position
    const hue = Math.round((clientX / innerWidth) * 360);
    const luminosity = Math.round((clientY / innerHeight) * 100);
    const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

    // Update the background color
    body.style.backgroundColor = hslValue;

    // Update the HSL, hue, and luminosity displays
    hslDiv.textContent = hslValue;
    hueDiv.textContent = `hue\n${hue}`;
    luminosityDiv.textContent = `luminosity\n${luminosity}`;

    // Update the crosshairs position
    axisX.setAttribute("x1", clientX);
    axisX.setAttribute("x2", clientX);
    axisX.setAttribute("y1", 0);
    axisX.setAttribute("y2", innerHeight);

    axisY.setAttribute("x1", 0);
    axisY.setAttribute("x2", innerWidth);
    axisY.setAttribute("y1", clientY);
    axisY.setAttribute("y2", clientY);
  };
  
  const copyToClipboard = () => {
    const hslValue = hslDiv.textContent;
    navigator.clipboard
      .writeText(hslValue)
      .then(() => console.log("HSL value copied to clipboard"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  // Add event listeners for mouse movement and clicks
  body.addEventListener("mousemove", updateColor);
  body.addEventListener("click", copyToClipboard);
}
