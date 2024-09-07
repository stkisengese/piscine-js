export { setBox, createCircle, moveCircle };

let lastCircle = null;
let box = null;

function createCircle() {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${event.clientX - 25}px`;
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.background = 'white';
    document.body.appendChild(circle);
    lastCircle = circle;
  });
}

function moveCircle() {
  document.addEventListener('mousemove', (event) => {
    if (lastCircle) {
      const boxRect = box.getBoundingClientRect();
      let x = event.clientX - 25;
      let y = event.clientY - 25;

      if (isInsideBox(lastCircle, boxRect)) {
        lastCircle.style.background = 'var(--purple)';
        x = Math.max(boxRect.left + 1, Math.min(x, boxRect.right - 51));
        y = Math.max(boxRect.top + 1, Math.min(y, boxRect.bottom - 51));
      }

      lastCircle.style.left = `${x}px`;
      lastCircle.style.top = `${y}px`;
    }
  });
}

function setBox() {
  box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
}

function isInsideBox(circle, boxRect) {
  const circleRect = circle.getBoundingClientRect();
  return (
    circleRect.left >= boxRect.left &&
    circleRect.right <= boxRect.right &&
    circleRect.top >= boxRect.top &&
    circleRect.bottom <= boxRect.bottom
  );
}
