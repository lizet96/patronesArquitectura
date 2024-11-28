
const ShippingCalculator = require('./shippingCalculator');
const GroundShipping = require('./strategies/groundShipping');
const AirShipping = require('./strategies/airShipping');
const SeaShipping = require('./strategies/seaShipping');

// Crear las estrategias
const groundShipping = new GroundShipping();
const airShipping = new AirShipping();
const seaShipping = new SeaShipping();

// Crear el contexto con una estrategia inicial
const shippingCalculator = new ShippingCalculator(groundShipping);

// Detalles del paquete
const packageDetails = {
    weight: 10, // en kilogramos
    distance: 200 // en kilómetros
};

// Calcular con la estrategia actual (terrestre)
shippingCalculator.calculateCost(packageDetails);

// Cambiar a envío aéreo y calcular
shippingCalculator.setStrategy(airShipping);
shippingCalculator.calculateCost(packageDetails);

// Cambiar a envío marítimo y calcular
shippingCalculator.setStrategy(seaShipping);
shippingCalculator.calculateCost(packageDetails);
