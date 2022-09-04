const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
class Item {
    name = '';
    price = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}
const addItemToCart = (user, item) => {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updateCart });
}

const applyTax = (user) => {
    amazonHistory.push(user)
    const { cart } = user
    const taxRate = 1.3;
    const updatedCart = cart.map(item => new Item(item.name, item.price * taxRate))
    return Object.assign({}, user, { cart: updatedCart });
}

const buyItem = (user) => {
    amazonHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart })
}

const emptyCart = (user) => {
    amazonHistory.push(user)
    return Object.assign({}, user, { cart: [] });
}

const amazonHistory = [];


const compose = (f, g) => (...args) => { //f: accumulator , g: currentFun

    return f(g(...args));
};

function purchaseItem(...funs) {
    console.log('Reduced Function: ', funs.reduce(compose));
    return funs.reduce(compose);
}

const composedFun = purchaseItem(emptyCart, buyItem, applyTax, addItemToCart);
console.log('Composed fun => ', composedFun);
console.log(composedFun(user, new Item('jacket', 20)));


// In Object.assign(), if 2 Source Objects have same property then the latest property will override the previous Object's property

console.log('History =>', amazonHistory);