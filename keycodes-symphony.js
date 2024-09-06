export function compose() {
  document.addEventListener("keydown", (event) => {
    const notesContainer = document.body;

    // Handle lowercase alphabet keys (a-z)
    if (event.key >= "a" && event.key <= "z") {
      const note = document.createElement("div");
      note.className = "note";
      note.textContent = event.key;

      // Generate a unique background color based on the key
      note.style.backgroundColor = generateColor(event.key);
      notesContainer.appendChild(note);

      //             const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      //             note.style.backgroundColor = color;

      //             container.appendChild(note);
    }

    // Handle Backspace: remove the last note
    if (event.key === "Backspace") {
      if (notesContainer.lastChild) {
        notesContainer.removeChild(notesContainer.lastChild);
      }
      // const lastNote = notesContainer.querySelector('.note:last-child');
      // if (lastNote) {
      //   notesContainer.removeChild(lastNote);
      // }
    }

    // Handle Escape: clear all notes
    if (event.key === "Escape") {
      notesContainer.innerHTML = "";
      // const allNotes = notesContainer.querySelectorAll('.note');
      // allNotes.forEach(note => note.remove());
    }
  });
}

function generateColor(char) {
  const hue = ((char.charCodeAt(0) - 97) / 26) * 360;
  return `hsl(${hue}, 100%, 50%)`;
}
