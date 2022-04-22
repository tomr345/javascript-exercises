const repeatString = function(x, y) {
    let phrase = "";
    
    if (y >= 1) {
        while (y != 0) {
            phrase += x;
            y--;
        }
        return phrase;
    } 
    else if (y < 0)
    {
        return 'ERROR';
    }
    else {
        return "";
    }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
