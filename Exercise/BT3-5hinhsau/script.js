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

// 9. The Fiscal Code
// Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.
// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:
// Generate 3 capital letters from the surname, if it has:
// At least 3 consonants then the first three consonants are used.(Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
// Generate 3 capital letters from the name, if it has:
// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
