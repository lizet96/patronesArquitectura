
const Coffee = require('./components/coffee');
const MilkDecorator = require('./decorators/milkDecorator');
const SugarDecorator = require('./decorators/sugarDecorator');
const WhippedCreamDecorator = require('./decorators/whippedCreamDecorator');

// Crear un café básico
let myCoffee = new Coffee();
console.log(myCoffee.description()); // Café básico
console.log(`Costo: $${myCoffee.cost()}`); // 5

// Agregar leche
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.description()); // Café básico, con leche
console.log(`Costo: $${myCoffee.cost()}`); // 6.5

// Agregar azúcar
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.description()); // Café básico, con leche y azúcar
console.log(`Costo: $${myCoffee.cost()}`); // 7

// Agregar crema batida
myCoffee = new WhippedCreamDecorator(myCoffee);
console.log(myCoffee.description()); // Café básico, con leche, azúcar y crema batida
console.log(`Costo: $${myCoffee.cost()}`); // 9
