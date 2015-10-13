##isPrime  
Sometimes you just want to know if a number is a prime number or not. You can do that with only 1 line of code by using a regular expression. For a much better version to check if a number is a prime number, take a look at Alexei Kourbatov's [Source](http://www.javascripter.net/faq/primefactors.txt) and  [Demo](http://www.javascripter.net/faq/numberisprime.htm)  

```js
function isPrime(n) { return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/)); }
```
Than call ```console.log(isPrime(n));```
This returns a TRUE or FALSE 
