
class WaitingState {
    setContext(context) {
        this.context = context; // Referencia al contexto
    }

    handle() {
        console.log("Esperando selección de bebida...");
        // Cambiamos al estado de preparación como ejemplo
        const PreparingState = require('./preparingState');
        this.context.setState(new PreparingState());
    }
}

module.exports = WaitingState;
