//Logger: La clase que implementa el patrón Singleton, asegurando que solo se cree una instancia. Si se intenta crear más de una, se reutiliza la primera.
//log: Método para registrar un mensaje en el log con un timestamp.
//getLogs: Método para recuperar todos los logs guardados.
//Al ejecutar este código, podemor ver que logger1 y logger2 son en realidad la misma instancia.


const Logger = require('./patterns/loggerSingleton'); 
const logModuleActivity = require('./modules/logModule'); 

// Crear instancias del Logger en el archivo principal
const logger1 = new Logger();
logger1.log("Mensaje desde index.js - Logger principal");

// Usar el Logger desde otro módulo
logModuleActivity();

// Registrar más mensajes en index.js
logger1.log("Otro mensaje desde index.js");

// Mostrar los logs registrados
console.log("Logs desde index.js:", logger1.getLogs());

// Verificar que la instancia sigue siendo única
const logger2 = new Logger();
console.log("Logs desde logger2 (misma instancia):", logger2.getLogs());
console.log("¿Logger1 y Logger2 son la misma instancia?", logger1 === logger2);
