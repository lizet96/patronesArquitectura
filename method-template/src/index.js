
const IndividualProcessor = require('./processors/individualProcessor');
const WholesaleProcessor = require('./processors/wholesaleProcessor');

// Crear pedidos
const individualOrder = {
    items: [
        { name: 'Laptop', price: 1000, quantity: 1 },
        { name: 'Mouse', price: 50, quantity: 2 }
    ]
};

const wholesaleOrder = {
    items: [
        { name: 'Laptop', price: 1000, quantity: 10 },
        { name: 'Mouse', price: 50, quantity: 20 }
    ]
};

// Procesar pedidos
console.log('--- Pedido Individual ---');
const individualProcessor = new IndividualProcessor();
individualProcessor.processOrder(individualOrder);

console.log('\n--- Pedido Mayorista ---');
const wholesaleProcessor = new WholesaleProcessor();
wholesaleProcessor.processOrder(wholesaleOrder);
