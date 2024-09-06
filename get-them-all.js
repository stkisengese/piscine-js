// Function to get architects and non-architects
export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName("a"));
  const nonArchitects = Array.from(document.getElementsByTagName("span"));
  return [architects, nonArchitects];
};

// Function to get classical and non-classical architects
export const getClassical = () => {
  const architects = getArchitects()[0];
  const classical = architects.filter((architect) =>
    architect.classList.contains("classical")
  );
  const nonClassical = architects.filter(
    (architect) => !architect.classList.contains("classical")
  );
  return [classical, nonClassical];
};

// Function to get active and non-active classical architects
export const getActive = () => {
  const classical = getClassical()[0];
  const active = classical.filter((architect) =>
    architect.classList.contains("active")
  );
  const nonActive = classical.filter(
    (architect) => !architect.classList.contains("active")
  );
  return [active, nonActive];
};

// Function to get Bonanno Pisano and other active classical architects
export const getBonannoPisano = () => {
  const active = getActive()[0];
  const bonannoPisano = document.getElementById("BonannoPisano");
  const otherActiveClassical = active.filter(
    (architect) => architect.id !== "BonannoPisano"
  );
  return [bonannoPisano, otherActiveClassical];
};
