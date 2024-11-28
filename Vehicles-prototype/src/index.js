
const Vehicle = require('./vehicles');

// Crear un prototipo base para coches
const carPrototype = new Vehicle('Coche', 'Toyota', 'Corolla', 4);
carPrototype.setColor('Blanco');

// Crear un prototipo base para motocicletas
const bikePrototype = new Vehicle('Moto', 'Yamaha', 'R15', 2);
bikePrototype.setColor('Negro');

// Clonar el prototipo del coche y personalizar
const customCar = carPrototype.clone();
customCar.setColor('Rojo');
customCar.model = 'Camry';

// Clonar el prototipo de la moto y personalizar
const customBike = bikePrototype.clone();
customBike.setColor('Azul');

// Mostrar detalles de los vehículos
console.log('--- Prototipo de Coche ---');
carPrototype.showDetails();

console.log('\n--- Coche Personalizado ---');
customCar.showDetails();

console.log('\n--- Prototipo de Moto ---');
bikePrototype.showDetails();

console.log('\n--- Moto Personalizada ---');
customBike.showDetails();
