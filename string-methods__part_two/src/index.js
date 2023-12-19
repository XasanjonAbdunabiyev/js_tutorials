// const obj = {
//     name: "john", 
//     age: 15
// }

// console.log(obj.age);
// const { name } = obj;
// console.log(name);

// console.log(obj["name"]);


// console.log(str.includes("lorem"))

// console.log(str.slice(4));
let str = "The mirrar";

// console.log(str.includes(" mir"));

// function includesFunksiya(ishlatiladiganObyekt, qidirilayotganElement) {
//     if (ishlatiladiganObyekt.includes) {
//         return ishlatiladiganObyekt.includes(qidirilayotganElement)
//     }
//     else {
//         for (let i = 0; i < ishlatiladiganObyekt.length; i++) {
//             if (ishlatiladiganObyekt[i] === qidirilayotganElement) {
//                 return true
//             }
//         }
//     }

//     return false
// }

// console.log(includesFunksiya("The mirror", "The"))


// function check(string) {
//     let newArr = [];
//     if (typeof string !== "string") return;

//     for (let i = 1; i < string.length; i++) {
//         if (string[i] === string[i - 1] && !newArr.includes(string[i]) && string[i] !== " ") {
//             newArr.push(string[i]);
//         }
//     }
//     return newArr;
// }

// console.log(check("hello"))


// function longestWord(words) {
//     let splitWords = words.split(" ");
//     let word = "";

//     for (let i = 0; i < splitWords.length; i++) {
//         if (splitWords[i].length > word.length) {
//             word = splitWords[i];
//         }
//     }
// }

// console.log(longestWord("I'am get up early today"));



function findFirstLatter(string)  {
    let x = '';
    for (let i = 0; i < string.length; i++) {
        if (i == 0 || string[i - 1] === " ") {
            x += string[i].toUpperCase();
        } else {
            x += string[i]
        }
    }
    return x
}

console.log(findFirstLatter("i love code"))