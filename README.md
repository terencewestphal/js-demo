# JavaScript Demo's

## [Sieve of Eratosthenes](http://terencewestphal.github.io/js-demo/sieve/)

**The sieve of Eratosthenes is one of the most efficient ways to find all of the smaller primes.**  
Read more on [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).  

> Sift the Two's and Sift the Three's,  
> The Sieve of Eratosthenes.  
> When the multiples sublime,  
> The numbers that remain are Prime.  
> 
> -Anonymous-  

```js
// Sieve of Eratosthenes
function sieve(N) {
  var n, p, primes = [], str = [];
  for (n = 2; n < N / 2; n++) {
    if (primes[n]) { continue; }
    for (p = 2 * n; p <= N; p += n) { primes[p] = true; }
  }
  for (n = 2; n <= N; n++) { if (!primes[n]) str.push(n); }
  return str.join(', ');
}
```

![img](/sieve/Sieve_of_Eratosthenes_animation.gif)  
