
const OrderProcessor = require('../orderProcessor');

class IndividualProcessor extends OrderProcessor {
    applyDiscount(total) {
        console.log('Descuento aplicado: 5% para clientes individuales.');
        return total * 0.95; // 5% de descuento
    }
}

module.exports = IndividualProcessor;
