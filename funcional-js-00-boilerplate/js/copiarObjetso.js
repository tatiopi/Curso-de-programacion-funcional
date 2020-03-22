let a = 1;
let b = a;

console.log(a, b);
b += 1;
console.log(a, b);

let car = {
    color: 'red',
    year: 2019,
    km: 0,
    owner: {
        name: 'David',
        edad: 25
    }
};

// let newCar = car;
let newCar = Object.assign({}, car);

console.log(car, newCar);

newCar.owner.edad = 26;

console.log(car, newCar);

console.log('--------------------------------');

let newCar2 = JSON.parse(JSON.stringify(newCar));

console.log(car, newCar2);

newCar2.year = 2020;
newCar2.owner.edad = 36;

console.log(car, newCar2);