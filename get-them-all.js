const partition = (array, callback) => [
    array.filter(callback),
    array.filter((...args) => !callback(...args))
];

// Function to get architects and non-architects
export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'));
    const nonArchitects = Array.from(document.getElementsByTag('span'));
    return [architects, nonArchitects];
};
  
// Function to get classical and non-classical architects
export const getClassical = () => {
    const [architects] = getArchitects();
    return partition(architects, architect => architect.classList.contains('classical'));
};

  
// Function to get active and non-active classical architects
export const getActive = () => {
    const [classicalArchitects] = getClassical();
    return partition(classicalArchitects, architect => architect.classList.contains('active'));
};

  
// Function to get Bonanno Pisano and other active classical architects
export const getBonannoPisano = () => {
    const [activeClassicalArchitects] = getActive();
    const bonannoPisano = activeClassicalArchitects.find(architect => architect.id === 'BonannoPisano');
    const remainingArchitects = activeClassicalArchitects.filter(architect => architect.id !== 'BonannoPisano');

    return [bonannoPisano, remainingArchitects];
};
