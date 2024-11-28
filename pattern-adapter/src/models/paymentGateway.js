// src/models/paymentGateway.js
class PaymentGateway {
    processPayment(amount) {
        throw new Error("This method should be implemented by subclasses");
    }
}

module.exports = PaymentGateway;
