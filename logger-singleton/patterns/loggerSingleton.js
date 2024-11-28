//La clase Logger asegura que solo haya una instancia de sí misma, y cualquier intento de crear una nueva instancia devolverá la misma.
//Se guarda cada mensaje de log junto con un timestamp.
//El método getLogs devuelve todos los logs registrados.

class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance; // Devuelve la instancia única si ya existe
        }
        
        this.logs = [];
        Logger.instance = this; // Asigna la instancia actual
        return this;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`${timestamp}: ${message}`);
        console.log(`${timestamp}: ${message}`);
    }

    getLogs() {
        return this.logs;
    }
}

module.exports = Logger;
