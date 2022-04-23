const sumAll = function(x, y) {
    if (x > 0 && y > 0 && Number.isInteger(x) && Number.isInteger(y)) {
        let first = 0;
        let last = 0;

        if (y > x) {
            first = x;
            last = y;
        }
        else {
            first = y;
            last = x;
        }
        
        let sum = 0;
        let counter = first;

        while (counter <= last) {
            sum += counter;
            counter++;
        }

        return sum;
    }
    else
    {
        return 'ERROR';
    }

};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
