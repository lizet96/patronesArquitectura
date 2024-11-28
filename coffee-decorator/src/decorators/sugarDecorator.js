
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 0.5; // Agrega $0.5 por azúcar
    }

    description() {
        return this.coffee.description() + ", con azúcar";
    }
}

module.exports = SugarDecorator;
