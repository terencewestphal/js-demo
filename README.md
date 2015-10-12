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

![img](/sieve/Sieve_of_Eratosthenes_animation.gif)  

```js
// The Sieve of Eratosthenes in JavaScript
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
*There are many versions of sieve on the web, this is my personal favorite*

##isPrime  
Sometimes you just want to know if a number is a prime number or not. You can do that with a regular expression.

```js
function isPrime(n) {
  return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
}
```
Than call ```console.log(isPrime(n));```
This returns a TRUE or FALSE 

