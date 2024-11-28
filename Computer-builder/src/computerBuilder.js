// src/computerBuilder.js
const Computer = require('./computer');

class ComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }

    setProcessor(processor) {
        this.computer.setProcessor(processor);
        return this; // Permite el encadenamiento
    }

    setRAM(RAM) {
        this.computer.setRAM(RAM);
        return this;
    }

    setStorage(storage) {
        this.computer.setStorage(storage);
        return this;
    }

    setGraphicsCard(graphicsCard) {
        this.computer.setGraphicsCard(graphicsCard);
        return this;
    }

    build() {
        return this.computer;
    }
}

module.exports = ComputerBuilder;
