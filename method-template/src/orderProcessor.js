
class OrderProcessor {
    processOrder(order) {
        this.validateOrder(order);
        const total = this.calculateTotal(order);
        const discountedTotal = this.applyDiscount(total);
        this.processPayment(discountedTotal);
        this.generateReceipt(order, discountedTotal);
    }

    validateOrder(order) {
        if (!order.items || order.items.length === 0) {
            throw new Error('El pedido no tiene artículos.');
        }
        console.log('Pedido validado.');
    }

    calculateTotal(order) {
        const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Total calculado: $${total.toFixed(2)}`);
        return total;
    }

    // Método "gancho" que será implementado por las subclases
    applyDiscount(total) {
        throw new Error('El método applyDiscount debe ser implementado por la subclase.');
    }

    processPayment(amount) {
        console.log(`Procesando pago por $${amount.toFixed(2)}.`);
    }

    generateReceipt(order, amount) {
        console.log(`Recibo generado por $${amount.toFixed(2)}. ¡Gracias por tu compra!`);
    }
}

module.exports = OrderProcessor;
