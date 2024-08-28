function getAcceleration(obj) {
  const { f, m, Δv, Δt, t, d } = obj;

  if (f !== undefined && m !== undefined) {
    return f / m;
  } else if (Δv !== undefined && Δt !== undefined) {
    return Δv / Δt;
  } else if (d !== undefined && t !== undefined) {
    return (2 * d) / (t * t);
  } else {
    return "impossible";
  }
}

// Example usage:
const properties = {
  f: 10,
  m: 5,
  Δv: 100,
  Δt: 50,
  t: 1,
  d: 10,
};

console.log(getAcceleration(properties));
