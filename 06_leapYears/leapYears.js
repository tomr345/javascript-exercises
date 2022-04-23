const leapYears = function(x) {
    let year = x;

    if (x % 4 == 0) {
        if (x % 100 == 0) {
            if (x % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }

    return false;
};

console.log(leapYears(2000));
console.log(leapYears(1985));
console.log(leapYears(1984));

// Do not edit below this line
module.exports = leapYears;
