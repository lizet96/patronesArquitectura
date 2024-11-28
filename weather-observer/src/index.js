
const WeatherStation = require('./weatherStation');
const MobileDisplay = require('./observers/mobileDisplay');
const WebDisplay = require('./observers/webDisplay');

// Crear la estación meteorológica (Subject)
const weatherStation = new WeatherStation();

// Crear observadores
const mobileDisplay = new MobileDisplay();
const webDisplay = new WebDisplay();

// Registrar observadores en la estación meteorológica
weatherStation.addObserver(mobileDisplay);
weatherStation.addObserver(webDisplay);

// Simular cambios de temperatura
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);

// Remover un observador
weatherStation.removeObserver(mobileDisplay);
weatherStation.setTemperature(35);
