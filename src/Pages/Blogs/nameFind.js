
const products = [
    { name: 'ram', quantity: 2, description: 'Random Access Memory' },
    { name: 'motherboard', quantity: 4, description: 'A motherboard in general-purpose computers and other expandable systems' },
    { name: 'ssd', quantity: 3, description: 'Solid State Drive' },
];

function isSearch(parts) {
    return parts.name === 'motherboard';
}

console.log(products.find(isSearch));