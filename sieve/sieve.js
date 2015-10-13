function sieve(N) {
  var n, p, primes = [], str = [];
  for (n = 2; n < N / 2; n++) {
    if (primes[n]) { continue; }
    for (p = 2 * n; p <= N; p += n) { primes[p] = true; }
  }
  for (n = 2; n <= N; n++) { if (!primes[n]) str.push(n); }
  return str.join(', ');
}
