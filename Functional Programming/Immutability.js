const products = [
    { name: 'Phone', price: 26000 },
    { name: 'TV', price: 40000 }
];

const formattedProducts = products.map(item => {
    return { ...item, price: `${item.price}` + `$` }

})
console.log('Products => ', products);
console.log('Formatted Products =>', formattedProducts);

const boo = { foo: true };
boo.foo = false;
console.log('Boo =>', boo);

const immutableBoo = Object.freeze({ foo: true });
immutableBoo.foo = false;

console.log('Immutable Boo =>', immutableBoo);

const obj = Object.freeze({ foo: { bar: true } }); // mutable 
obj.foo.bar = false;
obj.foo = 'hi';
console.log('Obj => ', obj); // { foo: { bar: false} }