/* How to create .slice () */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log (animals.slice (4));
// Expected output: Array ["elephant"]
console.log (animals.slice ())
// Expected output: Array ["ant", "bison". "camel", "duck", "elephant"]
console.log (animals.slice (1,4))
// Expected output: Array ["bison", "camel", "duck"]
console.log (animals.slice (-3));
// Expected output: Array ["camel", "duck", "Elephant"]
console.log (animals.slice (2,-2));
// Expected output; Array ["camel"]
console.log (animals.slice(2,-1))
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



