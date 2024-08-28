const circular = {
  circular: null,
};

circular.circular = circular; // This will create a circular reference

console.log(circular);
