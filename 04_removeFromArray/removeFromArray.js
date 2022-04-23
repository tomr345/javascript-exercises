const removeFromArray = function(array, ...theArgs) {
    const newArray = [];
    const argValues = [];

    theArgs.forEach((argument) => {
        argValues.push(argument)
    })

    for (let x = 0; x < array.length; x++) {
        if (argValues.includes(array[x]) == false) {
            newArray.push(array[x]);
        }
    }
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
