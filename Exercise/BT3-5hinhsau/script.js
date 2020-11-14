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

// 7. Digital Egomania: the Self-Describing Numbers
// In this challenge, you have to establish if a given number is self-describing. To be self-describing, a positive number must have an even quantity of digits, because it has to be split into separated pairs of adjacent digits x and y, and each pair can be interpreted as a declaration: among the digits of the number, there are x instances of the digit equal to y.
// If we take as an example the self-describing number 10123331, we can see how it has an even quantity of digits and it can be split into four pairs:
// [1, 0] ➞ This pair declares that among the digits of the number there is 1 instance of 0 [1, 2] ➞ This pair declares that among the digits of the number there is 1 instance of 2 [3, 3] ➞ This pair declares that among the digits of the number there are 3 instances of 3 [3, 1] ➞ This pair declares that among the digits of the number there are 3 instances of 1 If every "declaration" represented by the pairs is true (as in the above example), then the number is self-describing.
// Given a non-negative integer num, implement a function that returns true if num is a self-describing number, or false if it's not.

// function isSelfDescribing(n) {
//     n = String(n)
//     if (n.length % 2 == 0) {
//         let check = true
//         for (let i = 0; i < n.length; i++) {
//             if (i % 2 != 0) {
//                 let res = []

//                 res.push(n[i - 1])
//                 res.push(n[i])
//                 res = res.join("")

//                 let count = 0

//                 for (let k = 0; k < n.length; k++) {
//                     if (res[1] == n[k]) {
//                         count += 1
//                     }
//                 }

//                 if (count != Number(res[0])) {
//                     check = false
//                 }
//             }
//         }
//         console.log(check)
//     }

//     else console.log(false)
// }

// isSelfDescribing(10123331)
// isSelfDescribing(224444)
// isSelfDescribing(2211)
// isSelfDescribing(333)   

// 8. Check Magic Square
// A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical, horizontal, and diagonal row add up to the same value.
// 3x3 Magic Square
// Write a function that takes a 2D array, checks if it's a magic square and returns either true or false depending on the result.

// function isMagicSquare(array) {
//     let sum = 0
//     let check = true
//     for (let i = 0; i < array[0].length; i++) {
//         sum += array[0][i]
//     }

//     // hàng
//     for (let i = 0; i < array.length; i++) {
//         let hang = 0
//         for (let j = 0; j < array[i].length; j++) {
//             hang += array[i][j]
//         }
//         if (hang != sum) {
//             check = false
//         }
//     }

//     // cột
//     let cot1 = 0
//     let cot2 = 0
//     for (let i = 0; i < array.length; i++) {
//         cot1 += array[i][0]
//     }
//     for (let i = 0; i < array.length; i++) {
//         cot2 += array[i][1]
//     }
//     if (cot1 != sum || cot2 != sum) {
//         check = false
//     }

//     // chéo 1 
//     let cheo1 = 0
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (i == j) {
//                 cheo1 += array[i][j]
//             }
//         }
//     }
//     if (cheo1 != sum) {
//         check = false
//     }

//     // chéo 2
//     let cheo2 = 0
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (i + j == array.length - 1) {
//                 cheo2 += array[i][j]
//             }
//         }
//     }
//     if (cheo2 != sum) {
//         check = false
//     }

//     console.log(check)
// }


// isMagicSquare([
//     [8, 1, 6],
//     [3, 5, 7],
//     [4, 9, 2]
// ])

// isMagicSquare([
//     [16, 3, 2, 13],
//     [5, 10, 11, 8],
//     [9, 6, 7, 12],
//     [4, 15, 14, 1]
// ])

// isMagicSquare([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])

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

// const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
// const vowels = ["a", "e", "i", "o", "u"]
// const months = {
//     1: "A",
//     2: "B",
//     3: "C",
//     4: "D",
//     5: "E",
//     6: "H",
//     7: "L",
//     8: "M",
//     9: "P",
//     10: "R",
//     11: "S",
//     12: "T"
// }

// function fiscalCode(obj) {
//     let res = ""
//     let res2 = ""
//     let res3 = ""
//     let res4 = ""
//     let res5 = ""
//     let name = obj.name.toLowerCase()
//     let surname = obj.surname.toLowerCase()
//     let gender = obj.gender
//     let dob = obj.dob

//     // surname
//     if (surname.length > 2) {
//         for (let i = 0; i < surname.length; i++) {
//             for (let j = 0; j < consonants.length; j++) {
//                 if (surname[i] == consonants[j]) {
//                     res += surname[i].toUpperCase()
//                 }
//                 if (res.length == 3) {
//                     break
//                 }
//             }
//         }
//         if (res.length < 3) {
//             for (let i = 0; i < surname.length; i++) {
//                 for (let j = 0; j < vowels.length; j++) {
//                     if (surname[i] == vowels[j]) {
//                         res += surname[i].toUpperCase()
//                     }
//                     if (res.length == 3) {
//                         break
//                     }
//                 }
//             }
//         }
//     }
//     else if (surname.length <= 2) {
//         for (let i = 0; i < surname.length; i++) {
//             for (let j = 0; j < consonants.length; j++) {
//                 if (surname[i] == consonants[j]) {
//                     res += surname[i].toUpperCase()
//                 }
//             }
//         }
//         for (let i = 0; i < surname.length; i++) {
//             for (let j = 0; j < vowels.length; j++) {
//                 if (surname[i] == vowels[j]) {
//                     res += surname[i].toUpperCase()
//                 }
//             }
//         }
//         for (let i = 0; i < 3; i++) {
//             res += "X"
//             if (res.length == 3) {
//                 break
//             }
//         }
//     }

//     // name
//     if (name.length > 2) {
//         let a = 0
//         for (let i = 0; i < name.length; i++) {
//             for (let j = 0; j < consonants.length; j++) {
//                 if (name[i] == consonants[j]) {
//                     a += 1
//                     res2 += name[i].toUpperCase()
//                 }
//                 if (res2.length == 3) {
//                     break
//                 }
//             }
//         }
//         if (res2.length < 3) {
//             for (let i = 0; i < name.length; i++) {
//                 for (let j = 0; j < vowels.length; j++) {
//                     if (name[i] == vowels[j]) {
//                         res2 += name[i].toUpperCase()
//                     }
//                     if (res2.length == 3) {
//                         break
//                     }
//                 }
//             }
//         }
//     }
//     else if (name.length <= 2) {
//         for (let i = 0; i < name.length; i++) {
//             for (let j = 0; j < consonants.length; j++) {
//                 if (name[i] == consonants[j]) {
//                     res2 += name[i].toUpperCase()
//                 }
//             }
//         }
//         for (let i = 0; i < name.length; i++) {
//             for (let j = 0; j < vowels.length; j++) {
//                 if (name[i] == vowels[j]) {
//                     res2 += name[i].toUpperCase()
//                 }
//             }
//         }
//         for (let i = 0; i < 3; i++) {
//             res2 += "X"
//             if (res2.length == 3) {
//                 break
//             }
//         }
//     }

//     // dob
//     // year
//     dob = dob.split("/")
//     let year = dob[2].split("")
//     let arrayYear = []
//     for(let i = year.length; i >= 2;i--){
//         arrayYear.splice(0,0,year[i])
//     }
//     arrayYear = arrayYear.join("")
//     res3 += arrayYear

//     // month
//     let month = Number(dob[1])
//     let arrayMonth = []
//     for(let x in months){
//         if(month == x){
//             res4 += months[x]
//         }
//     }

//     // day
//     let day = Number(dob[0])
//     if(gender=="M"){
//         if(day<10){
//             res5 += "0"+day
//         }
//         else {
//             res5 += day
//         }
//     }
//     else if(gender=="F"){
//         res5 += 40 + day
//     }

//     var result = res.concat(res2).concat(res3).concat(res4).concat(res5)
//     console.log(result)
// }

// fiscalCode({
//     name: "Matt",
//     surname: "Edabith",
//     gender: "M",
//     dob: "1/1/1900"
// })

// fiscalCode({
//     name: "Helen",
//     surname: "Yu",
//     gender: "F",
//     dob: "1/12/1950"
// })

// fiscalCode({
//     name: "Mickey",
//     surname: "Mouse",
//     gender: "M",
//     dob: "16/1/1928"
// })

// 10. Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// function countBoomerangs(array) {
//     let count = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == array[i + 2] && array[i] != array[i + 1]) {
//             count += 1
//         }
//     }
//     return count
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))