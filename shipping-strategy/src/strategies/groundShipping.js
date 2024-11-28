
class GroundShipping {
    calculate(packageDetails) {
        const cost = packageDetails.weight * 1.5 + packageDetails.distance * 0.5;
        console.log(`Tarifa por envío terrestre: $${cost.toFixed(2)}`);
        return cost;
    }
}

module.exports = GroundShipping;
