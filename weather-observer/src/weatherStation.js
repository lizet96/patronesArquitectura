
class WeatherStation {
    constructor() {
        this.temperature = null; // Estado principal
        this.observers = []; // Lista de observadores
    }

    // Agregar un observador
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remover un observador
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notificar a todos los observadores
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    // Cambiar el estado y notificar a los observadores
    setTemperature(temp) {
        console.log(`Temperatura actualizada a: ${temp}°C`);
        this.temperature = temp;
        this.notifyObservers();
    }
}

module.exports = WeatherStation;
