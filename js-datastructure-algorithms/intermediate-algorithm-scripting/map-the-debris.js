function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    // T = 2PIsqrt(a^3 / GM)
    // a = R + altitude
    return arr.map(obj => {

        return {
            name: obj.name,
            orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM))
        }
    })
}
console.log(
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])
)


// console.log(Math.pow(2.4, 3))