
class SeaShipping {
    calculate(packageDetails) {
        const cost = packageDetails.weight * 2.0 + packageDetails.distance * 0.8;
        console.log(`Tarifa por envío marítimo: $${cost.toFixed(2)}`);
        return cost;
    }
}

module.exports = SeaShipping;
