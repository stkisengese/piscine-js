function RNA(dna) {
  return dna.replace(/[ATCG]/g, (char) => {
    switch (char) {
      case "A":
        return "U";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
    }
  });
}

function DNA(rna) {
  return rna.replace(/[AUGC]/g, (char) => {
    switch (char) {
      case "A":
        return "T";
      case "U":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
    }
  });
}

console.log(RNA("ATCG")); // Outputs: UAGC
console.log(DNA("UAGC")); // Outputs: ATCG
