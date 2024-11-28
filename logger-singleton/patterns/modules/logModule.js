const Logger = require('../patterns/loggerSingleton'); // Importamos el Singleton

function logModuleActivity() {
    const logger = new Logger(); // Obtenemos la instancia del Logger
    logger.log("Actividad registrada desde logModule.js"); // Registramos un mensaje de log
}

module.exports = logModuleActivity;
