
const CoffeeMachine = require('./coffeeMachine');
const WaitingState = require('./states/waitingState');

// Crear una instancia de la máquina de café
const coffeeMachine = new CoffeeMachine();

// Establecer el estado inicial
coffeeMachine.setState(new WaitingState());

// Realizar varias solicitudes para ver los cambios de estado
coffeeMachine.handleRequest(); // Esperando selección de bebida...
coffeeMachine.handleRequest(); // Preparando tu bebida...
coffeeMachine.handleRequest(); // Sin agua. Por favor, rellene el tanque.
