
class CoffeeMachine {
    constructor() {
        this.state = null; // Estado inicial nulo
    }

    setState(state) {
        this.state = state; // Cambiar al estado recibido
        this.state.setContext(this); // Vincular el contexto con el nuevo estado
    }

    handleRequest() {
        if (this.state) {
            this.state.handle(); // Delegar comportamiento al estado actual
        } else {
            console.log("Estado no definido.");
        }
    }
}

module.exports = CoffeeMachine;
