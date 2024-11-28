
class Vehicle {
    constructor(type, brand, model, wheels) {
        this.type = type; // Tipo de vehículo (coche, moto, etc.)
        this.brand = brand; // Marca del vehículo
        this.model = model; // Modelo
        this.wheels = wheels; // Número de ruedas
    }

    setColor(color) {
        this.color = color;
    }

    clone() {
        // Retorna una copia del objeto actual
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    showDetails() {
        console.log(`Tipo: ${this.type}`);
        console.log(`Marca: ${this.brand}`);
        console.log(`Modelo: ${this.model}`);
        console.log(`Ruedas: ${this.wheels}`);
        console.log(`Color: ${this.color || 'No especificado'}`);
    }
}

module.exports = Vehicle;
