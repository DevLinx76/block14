/* How to create .splice () */
const shoppingList = ['eggs', 'milk', 'apples', 'juice'];
shoppingList.splice(1,0, 'bread');
//inserts at index 1
console.log(shoppingList);
// expected output: Array ["eggs", "bread", "milk", "apples", "juice"]
shoppingList.splice(4,1, 'mustard');
// replaces 1 element at index 4
console.log(shoppingList);
