let baseSalary = 40_000;
let overTime = 10;
let rate = 10;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
};

let employee = {
    baseSalary: 40_000,
    overTime: 10,
    rate: 10,
    getWage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
};

let number = employee.getWage();
console.log(number);
