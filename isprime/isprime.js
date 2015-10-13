function isPrime(n) {
  return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
}
