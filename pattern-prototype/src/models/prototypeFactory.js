// src/models/prototypeFactory.js

const { ContractDocument, ReportDocument } = require('./customDocuments');

class PrototypeFactory {
    constructor() {
        this.prototypes = {};
    }

    registerPrototype(key, prototype) {
        this.prototypes[key] = prototype;
    }

    createDocument(key) {
        const prototype = this.prototypes[key];
        if (!prototype) {
            throw new Error(`Prototipo no encontrado para clave: ${key}`);
        }
        return prototype.clone();  // Devuelve una copia/clon del prototipo
    }
}

module.exports = PrototypeFactory;
