// src/adapters/paymentAdapter.js
const OldPaymentService = require('../services/oldPaymentService');
const NewPaymentService = require('../services/newPaymentService');
const PaymentGateway = require('../models/paymentGateway');

// Adaptador para el sistema de pago antiguo
class OldPaymentAdapter extends PaymentGateway {
    constructor() {
        super();
        this.oldPaymentService = new OldPaymentService();
    }

    processPayment(amount) {
        // Redirigimos la llamada al método `makePayment()` del sistema antiguo
        this.oldPaymentService.makePayment(amount);
    }
}

// Adaptador para el sistema de pago nuevo
class NewPaymentAdapter extends PaymentGateway {
    constructor() {
        super();
        this.newPaymentService = new NewPaymentService();
    }

    processPayment(amount) {
        // Redirigimos la llamada al método `executePayment()` del sistema nuevo
        this.newPaymentService.executePayment(amount);
    }
}

module.exports = { OldPaymentAdapter, NewPaymentAdapter };
