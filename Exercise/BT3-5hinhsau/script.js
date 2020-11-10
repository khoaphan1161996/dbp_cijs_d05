// 6. Magic Sigil Generator
// A magic sigil is a glyph which represents a desire one wishes to manifest in their lives. There are many ways to create a sigil, but the most common is to write out a specific desire (e.g. "I HAVE WONDERFUL FRIENDS WHO LOVE ME"), remove all vowels, remove any duplicate letters and then design a glyph from what remains.
// Using the sentence above as an example, we would remove duplicate letters:
// AUFRINDSWHLOVME
// And then remove all vowels, leaving us with:
// FRNDSWHLVM
// Create a function that takes a string and removes its vowels and duplicate letters. The returned string should not contain any spaces and be in uppercase.
// function sigilize(string){
//     string = string.split("")
//     let res = []
//     for(let i = 0 ; i < string.length ; i ++){
//         if(string[i]!=" "){
//             res.push(string[i].toUpperCase())
//         }
//     }
//     string = []
//     for(let i = 0 ; i < res.length ; i++){
//         if(res[i]!="A" && res[i]!="E" && res[i]!="I" && res[i]!="O" && res[i]!="U"){
//             string.push(res[i])
//         }
//     }
//     return string.join("")
// }

// console.log(sigilize("i am healthy"))
// console.log(sigilize("I FOUND MY SOULMATE"))
// console.log(sigilize("I have a job I enjoy and it pays well"))

// 8. Check Magic Square
// A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical, horizontal, and diagonal row add up to the same value.
// 3x3 Magic Square
// Write a function that takes a 2D array, checks if it's a magic square and returns either true or false depending on the result.

// function isMagicSquare(array){
//     let chieudai = array.length
//     for(let i = 0 ; i < array.length ; i ++){
//         for(let j = 0 ; j < array[i].length ; j++){
//             if(i[j])
//         }
//     }
// }

// console.log(isMagicSquare([
//     [8, 1, 6],
//     [3, 5, 7],
//     [4, 9, 2]
//   ]))

// 10. Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// function countBoomerangs(array) {
//     let count = 0
//     for (let i = 0; i < array.length - 2; i++) {
//         if (array[i] == array[i + 2] && array[i] != array[i + 1]) {
//             count += 1
//         }
//     }
//     return count
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))

// lập trình hướng đối tượng
// Js có tính kế thừa, không cố tính đóng gói , đa hình và tính trừu tượng