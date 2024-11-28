// src/index.js

const PrototypeFactory = require('./models/prototypeFactory');
const { ContractDocument, ReportDocument } = require('./models/customDocuments');

// Crea la fábrica de prototipos
const factory = new PrototypeFactory();

// Registra el prototipo directamente
factory.registerPrototype('contract', new ContractDocument('Este es el contenido base de un contrato.'));
factory.registerPrototype('report', new ReportDocument('Este es el contenido base de un reporte.'));

// Crea una nueva instancia directamente sin usar `clone()`
const customContract = new ContractDocument('Este es un contrato personalizado.');
customContract.addSignature('John Doe');
customContract.display();

// Crea un reporte directamente sin usar `clone()`
const customReport = new ReportDocument('Este es un reporte personalizado.');
customReport.addSummary('Este es un resumen del reporte.');
customReport.display();
