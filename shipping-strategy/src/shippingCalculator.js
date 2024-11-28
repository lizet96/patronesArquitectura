
class ShippingCalculator {
    constructor(strategy) {
        this.strategy = strategy; // Estrategia inicial
    }

    setStrategy(strategy) {
        this.strategy = strategy; // Cambiar estrategia en tiempo de ejecución
    }

    calculateCost(packageDetails) {
        return this.strategy.calculate(packageDetails); // Delegar a la estrategia actual
    }
}

module.exports = ShippingCalculator;
