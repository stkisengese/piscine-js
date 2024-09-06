export function build(numBricks) {
    let count = 1;
    const interval = setInterval(() => {
      if (count > numBricks) {
        clearInterval(interval);
        return;
      }
  
      const brick = document.createElement('div');
      brick.id = `brick-${count}`;
     // brick.className = `brick column-${(count - 1) % 3 + 1}`;
      if (count % 3 === 2) {
    //   if ((count - 1) % 3 === 1) { // Middle column
        brick.dataset.foundation = 'true';
      }
  
      document.body.appendChild(brick);
      count++;
    }, 100);
  }

export function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation) {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    });
}

export function destroy() {
    const bricks = document.querySelectorAll('div[id^="brick-"]');
    //const bricks = document.querySelectorAll('.brick');
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1];
        lastBrick.remove();
    }   
}