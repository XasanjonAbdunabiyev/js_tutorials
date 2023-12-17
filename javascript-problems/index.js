console.log("works");

const myArr = [];

/**
 * 
 * @function  findUnicalLatter
 * @return array
 */

function findUnicalLatter(latter) {
    if (typeof latter !== "string") return;
    for (let i = 0; i < latter.length; i++)  myArr.push(latter[i]);
    return myArr;
}


function longestWord(word) {
    const words = word?.split(" ");
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }

    return longestWord
}

console.log(longestWord("I love Code"));


