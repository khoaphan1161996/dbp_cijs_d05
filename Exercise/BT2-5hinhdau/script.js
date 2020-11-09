// 1. Distance to Nearest Vowel
// Write a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.
// const str = 'abcdabcd';

// function distanceToNearestVowel(str){
//     const nearest = (arr = [], el) => arr.reduce((acc, val) => Math.min(acc,
//         Math.abs(val - el)), Infinity);
//         const vowelNearestDistance = (str = '') => {
//            const s = str.toLowerCase();
//            const vowelIndex = [];
//            for(let i = 0; i < s.length; i++){
//               if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' ||
//               s[i] === 'u'){
//                  vowelIndex.push(i);
//               };
//            };
//            return s.split('').map((el, ind) => nearest(vowelIndex, ind));
//         };
//         console.log(vowelNearestDistance(str));
// }

// distanceToNearestVowel(str)


// function distanceToNearestVowel(strg){
//     str = strg.split("")
//     let res = []

//     for(let i = 0 ; i < str.length ; i ++){
//         if(str[i]=="a" || str[i]=="e" ||str[i]=="i" ||str[i]=="o" ||str[i]=="u"){
//             str[i] = 0
//         }
//     }

//     for(let j = 0 ; j < str.length ; j ++){
//         res.push(Math.abs(j-str.indexOf(0,j)))
//     }

//     res.reverse()
//     let res2 = []
//     let chieudai
//     for(let j = 0 ; j < res.length ; j ++){
//         chieudai = Math.abs(j-res.indexOf(0,j))
//         if(res[j] >chieudai){
//             res2.push(chieudai)
//         }
//         else {
//             res2.push(res[j])
//         }
//     }
//     res2.reverse()
//     console.log(res2)
// }

// distanceToNearestVowel("aaaaa")
// distanceToNearestVowel("babbb")
// distanceToNearestVowel("abcdabcd")
// distanceToNearestVowel("shopper")

// 2. Odd Square Patch
// Create a function that takes an array of numbers, and returns the size of the biggest square patch of odd numbers. See examples for a clearer picture.
// function oddSquarePatch(inputarr) {

//     let array =inputarr
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].map(x => {
//             if (x % 2 == 0) {
//                 return x = 0
//             }
//             else {
//                 return x = 1
//             }
//         })
//     }
//     let count = 0
//     let arrcheckj = []
//     let flagroot = true
//     while (flagroot) {
//         let flagcheck = false
//         for (let i = 0; i < array.length; i++) {
//             array[i] = array[i].map(x => {
//                 if (x == 1) {
//                     return flagcheck = true
//                 }
//             })
//         }
//         if (flagcheck) {
//             count++
//             flagcheck = false
//         }
//         else break

//         for (i = 0; i < array.length - 1; i++) {
//             for (let j = 0; j < array[i].length - 1; j++) {
//                 if (array[i][j] == 1 && array[i][j + 1] == 1 && array[i + 1][j] == 1 && array[i + 1][j + 1] == 1) {
//                     arrcheckj.push(1)
//                 }
//                 else arrcheckj.push(0)
//             }
//             array[i] = arrcheckj
//             arrcheckj = []
//         }
//         array.splice(array.length - 1, 1)
//     }
//     console.log(count)

// }

// oddSquarePatch([
//     [1, 2, 4, 9],
//     [4, 5, 5, 7],
//     [3, 6, 1, 7]
//   ])


// 3. Junction or Self?
// In this challenge, you have to separate integers into two families, establishing if they are Junction Numbers or Self Numbers. Given a positive number n:
// If exists at least a single number which added to the sum of its digits is equal to n, then n is a Junction Number.
// If there are not numbers which added to the sum of their digits are equal to n, then n is a Self Number.
// Given a positive integer n, implement a function that returns:
// The string "Self" if n is a Self Number. If n is a Junction Number an array, ordered descendingly, containing the numbers which generate n.
// function junctionOrSelf(n){
//     let x = 0
//     let array = []
//     for(let i = 1 ; i < n; i ++){
//         i = String(i)
//         let a = 0
//         for(let j = 0 ; j < i.length; j ++){
//             a = a+ Number(i[j]) 
//         }
//         a = a + Number(i)
//         if(a==n){
//             x = 1
//             array.push(Number(i))
//         }
//     }
//     if (x == 1){
//         return array
//     }
//     else return ` Self`
// }

// console.log(junctionOrSelf(25)) 
// console.log(junctionOrSelf(818))
// console.log(junctionOrSelf(7)) 

// 4. Morse Code Decoded
// Create a function that takes a string (morse code) as an argument and returns an unencrypted string.
// function decodeMorse(string){
//     string = string.split(" ")
//     for(let i = 0 ; i < string.length;i++){
//         if(string[i]!=""){
//             string[i] = morseToDots[string[i]]
//         }
//         else string[i] = " "
//     }
//     string = string.join("")
//     return string
// }

// morseToDots = {
//     ".-":"A","-...":"B","-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
//     "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
//     "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
//     "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
//     "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
//     "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
//     "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
//     ".-.-.-":".", ".----.":"\"", "---..." :":", "--..--":", ", " ":""
//   }

// console.log(decodeMorse(".... . .-.. .--.  -- .  -.-.--"))
// console.log(decodeMorse("-.-. .... .- .-.. .-.. . -. --. ."))

// 5. Creating a Picture Frame
// Create a function that takes the width, height and character and returns a picture frame as a matrix.
// function getFrame(width,height,character){
//     if(width>2){
//         let res = ""
//         for(let i = 1; i <= height ; i ++){
//             for(let j = 1 ; j <= width ; j++){
//                 if(i!=1 && i!=height){
//                     if(j!=1 && j!=width){
//                         res += " "
//                     }
//                     else res += character
//                 }
//                 else {
//                      res += character
//                 }
//             }
//             res += `\n`
//         }
//         return res
//     }
//     else return "invalid"
// }

// console.log(getFrame(4, 5, "#"))
// console.log(getFrame(10, 3, "*"))
// console.log(getFrame(2, 5, "0"))