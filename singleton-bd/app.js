// Importar la clase Singleton de conexión a la base de datos
const DatabaseSingleton = require('./DatabaseSingleton');

// Crear una instancia de la conexión (siempre será la misma)
const db1 = new DatabaseSingleton();
const db2 = new DatabaseSingleton();

// Verificar que ambas instancias son la misma
console.log(db1 === db2);  // Debería imprimir 'true'

// Realizar una consulta
db1.query('SELECT * FROM usuario', [], (err, results) => {
    if (err) throw err;
    console.log(results);  // Muestra los resultados de la consulta
});

// Cerrar la conexión (opcional)
db1.close();
