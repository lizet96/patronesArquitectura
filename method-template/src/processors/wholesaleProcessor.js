
const OrderProcessor = require('../orderProcessor');

class WholesaleProcessor extends OrderProcessor {
    applyDiscount(total) {
        console.log('Descuento aplicado: 15% para clientes mayoristas.');
        return total * 0.85; // 15% de descuento
    }
}

module.exports = WholesaleProcessor;
