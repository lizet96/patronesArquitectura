// src/models/customDocuments.js

const Document = require('./documentPrototype');

// Subclase: ContractDocument
class ContractDocument extends Document {
    constructor(content) {
        super('Contrato', content);  // Llama al constructor de la clase base
    }

    // Método para agregar la firma al contrato
    addSignature(signature) {
        this.content += `\nFirma: ${signature}`;
    }
}

// Subclase: ReportDocument
class ReportDocument extends Document {
    constructor(content) {
        super('Reporte', content);
    }

    addSummary(summary) {
        this.content += `\nResumen: ${summary}`;
    }
}

module.exports = { ContractDocument, ReportDocument };
