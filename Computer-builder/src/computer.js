
class Computer {
    constructor() {
        this.processor = '';
        this.RAM = '';
        this.storage = '';
        this.graphicsCard = '';
    }

    setProcessor(processor) {
        this.processor = processor;
    }

    setRAM(RAM) {
        this.RAM = RAM;
    }

    setStorage(storage) {
        this.storage = storage;
    }

    setGraphicsCard(graphicsCard) {
        this.graphicsCard = graphicsCard;
    }

    showSpecs() {
        console.log(`Configuración de la computadora:`);
        console.log(`Procesador: ${this.processor}`);
        console.log(`RAM: ${this.RAM}`);
        console.log(`Almacenamiento: ${this.storage}`);
        console.log(`Tarjeta Gráfica: ${this.graphicsCard}`);
    }
}

module.exports = Computer;
