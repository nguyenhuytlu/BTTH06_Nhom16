const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart)

// 1.
if (shoppingCart.indexOf('Meat')) {
    shoppingCart.unshift('Meat')
}

console.log(shoppingCart)

// 2.
if (shoppingCart.indexOf('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

// 3.
let index = shoppingCart.indexOf('Honey');
if (index > -1) {
    shoppingCart.splice(index, 1)
}
console.log(shoppingCart)

index = -1;
// 4.
index = shoppingCart.indexOf('Tea');
if (index > -1) {
    shoppingCart[index] = 'Green Tea';
}
console.log(shoppingCart)

// 
getUserIp = () => {

}