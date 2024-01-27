/*1. In the following shopping cart add, remove, and edit items
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey']
.add 'Meat' in the beginning of your shopping cart if it has not been alreay added
. add  Sugar at the end  of your shopping cart if it has not been alreay  added
. remove 'Honey' if you are allergic to honey
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey'];
let flag = 0;

shoppingCart.forEach((item, index) => {
  if (item.toLowerCase() === 'sugar' || item.toLowerCase() === 'meat') {
    flag = 1;
  }
  if (item.toLowerCase() === 'tea') {
    shoppingCart[index] = 'green tea';
  }
});

if (flag === 0) {
  shoppingCart.unshift("Meat");
  shoppingCart.push("sugar");
}

const  allergic =true;
const indexToRemove = shoppingCart.indexOf('honey');
if (allergic) {
  shoppingCart.splice(indexToRemove, 1);
}

console.log(shoppingCart);
