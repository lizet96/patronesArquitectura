
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1.5; // Agrega $1.5 por leche
    }

    description() {
        return this.coffee.description() + ", con leche";
    }
}

module.exports = MilkDecorator;
