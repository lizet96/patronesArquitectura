// src/index.js
const ComputerBuilder = require('./computerBuilder');

console.log('--- Computadora Básica ---');
const basicComputer = new ComputerBuilder()
    .setProcessor('Intel i3')
    .setRAM('8GB')
    .setStorage('256GB SSD')
    .build();
basicComputer.showSpecs();

console.log('\n--- Computadora Gaming ---');
const gamingComputer = new ComputerBuilder()
    .setProcessor('Intel i9')
    .setRAM('32GB')
    .setStorage('1TB SSD')
    .setGraphicsCard('NVIDIA RTX 3080')
    .build();
gamingComputer.showSpecs();

console.log('\n--- Workstation ---');
const workstation = new ComputerBuilder()
    .setProcessor('AMD Ryzen 9')
    .setRAM('64GB')
    .setStorage('2TB SSD')
    .setGraphicsCard('NVIDIA RTX A5000')
    .build();
workstation.showSpecs();
