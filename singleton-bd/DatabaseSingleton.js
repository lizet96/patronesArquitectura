// Importar mysql2 para crear la conexión
const mysql = require('mysql2');

class DatabaseSingleton {
    constructor() {
        // Verificar si ya existe una instancia de la conexión
        if (DatabaseSingleton.instance) {
            return DatabaseSingleton.instance; // Retorna la instancia ya creada
        }

        // Configuración de la conexión a la base de datos
        this.connection = mysql.createConnection({
            host: 'localhost',   
            user: 'root',         
            password: '12345', 
            database: 'reclutamiento' 
        });

        // Guardar la instancia para futuras peticiones
        DatabaseSingleton.instance = this;

        return this;
    }

    // Método para obtener la conexión
    getConnection() {
        return this.connection;
    }

    // Método para ejecutar una consulta SQL
    query(sql, params, callback) {
        this.connection.execute(sql, params, callback);
    }

    // Método para cerrar la conexión
    close() {
        this.connection.end();
    }
}

// Exportar la clase Singleton para usarla en otras partes de la aplicación
module.exports = DatabaseSingleton;
