// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, '');
}


module.exports = reverse;
    // var strArr = str.split("");
    // var newStr = "";
    // for (var i = strArr.length - 1; i >= 0; i--) {
    //     newStr += strArr[i];
    // }
    // console.log(newStr);
    // return newStr;



    // return str.split("").reverse().join("");




    //     let reversed = "";
    //     for (let char of str) {
    //         reversed = char + reversed;
    //     }
    //     return reversed;
    // }
