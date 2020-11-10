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