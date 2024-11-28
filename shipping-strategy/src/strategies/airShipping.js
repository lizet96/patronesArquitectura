
class AirShipping {
    calculate(packageDetails) {
        const cost = packageDetails.weight * 3.0 + packageDetails.distance * 1.2;
        console.log(`Tarifa por envío aéreo: $${cost.toFixed(2)}`);
        return cost;
    }
}

module.exports = AirShipping;
