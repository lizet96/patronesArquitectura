class WhippedCreamDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2; // Agrega $2 por crema batida
    }

    description() {
        return this.coffee.description() + ", con crema batida";
    }
}

module.exports = WhippedCreamDecorator;
