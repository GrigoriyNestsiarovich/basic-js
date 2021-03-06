const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
    var count = 0;
    var ears = '^^';
    for(var i = 0; i < countCats.length; i++){
        for(var j = 0; j < countCats[i].length; j++){
            if( countCats[i][j] == ears)
                count++;
        }
    }
    return count;
};
