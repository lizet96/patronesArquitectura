// src/models/documentPrototype.js

class Document {
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }

    // Método para clonar el documento
    clone() {
        return new this.constructor(this.type, this.content);  // Usamos `this.constructor` para clonar el tipo correcto
    }

    display() {
        console.log(`Tipo: ${this.type}`);
        console.log(`Contenido: ${this.content}`);
    }
}

module.exports = Document;
