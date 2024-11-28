
class PreparingState {
    setContext(context) {
        this.context = context; // Referencia al contexto
    }

    handle() {
        console.log("Preparando tu bebida...");
        // Simulamos cambio de estado a Sin Agua
        const OutOfWaterState = require('./outOfWaterState');
        this.context.setState(new OutOfWaterState());
    }
}

module.exports = PreparingState;
