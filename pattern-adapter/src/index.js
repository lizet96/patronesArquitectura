// src/index.js
const { OldPaymentAdapter, NewPaymentAdapter } = require('./adapters/paymentAdapter');

// Aquí el cliente decide qué adaptador usar. Ambos adaptadores cumplen con la interfaz común `PaymentGateway`
// Usaremos el sistema de pago antiguo:
const oldPaymentProcessor = new OldPaymentAdapter();
oldPaymentProcessor.processPayment(100); // Pago procesado con el sistema antiguo: $100

// Ahora cambiamos al sistema de pago nuevo:
const newPaymentProcessor = new NewPaymentAdapter();
newPaymentProcessor.processPayment(200); // Pago procesado con el sistema nuevo: $200
