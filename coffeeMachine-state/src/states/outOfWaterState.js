
class OutOfWaterState {
    setContext(context) {
        this.context = context; // Referencia al contexto
    }

    handle() {
        console.log("Sin agua. Por favor, rellene el tanque.");
    }
}

module.exports = OutOfWaterState;
