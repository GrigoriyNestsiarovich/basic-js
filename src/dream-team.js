const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
     let g = '';
    var subArr = [];
    const member = (['Olivia', 1111, 'Lily', 'Oscar', true, null, 'Stas']);
    for (var i = 0; i < member.length; i++)
    {
        if(typeof member[i] == 'string')
        {
            g = member[i].slice("");
            subArr.push(g[0]);
        }
    }
    if (g == ''){
        return false;
}
return subArr.sort().join('').toUpperCase();
};
