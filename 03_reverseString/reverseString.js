const reverseString = function(string) {
    let newString = "";

    for (let y = (string.length - 1); y > -1; y--) {
        newString += string[y];
    }                    

    return newString;
};

console.log(reverseString("hello world"));

// Do not edit below this line
module.exports = reverseString;
