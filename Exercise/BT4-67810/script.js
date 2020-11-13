// 6. Digitaldrome
// In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).
// Given an integer n, implement a function that returns a string:
// Metadrome if the digits of n form an ascending sequence without repeating digits.
// Plaindrome if the digits of n form an ascending sequence with repeating digits.
// Katadrome if the digits of n form a descending sequence without repeating digits.
// Nialpdrome if the digits of n form a descending sequence with repeating digits.
// Repdrome if n contains a single repeating digit.
// Nondrome if none of the above conditions is true.

// function digitaldrome(n) {
//     let x = 0
//     n = String(n)
//     n = n.split("")
//     n = n.map(x => {
//         return x = Number(x)
//     })
//     // console.log(n)
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] < n[i + 1]) {
//             for (let j = 0; j < n.length; j++) {
//                 if (n[j] == n[j + 1]) {
//                     x = 2
//                     break
//                 }

//                 else if (n[j+1] > n[j + 2]) {
//                     x = 6
//                     break
//                 }

//                 else x = 1
//             }
//             break
//         }

//         else if (n[i] > n[i + 1]) {
//             for (let j = 0; j < n.length; j++) {
//                 if (n[j] == n[j + 1]) {
//                     x = 4
//                     break
//                 }

//                 else if (n[j+1] < n[j + 2]) {
//                     x = 6
//                     break
//                 }

//                 else x = 3
//             }
//             break
//         }

//         else if (n[i] == n[i + 1] && n[i] == n[i + 2]) {
//             x = 5
//             break
//         }
//     }

//     // console.log(x)
//     if (x == 1) {
//         console.log("Metadrome")
//     }
//     else if (x == 2) {
//         console.log("Plaindrome")
//     }
//     else if (x == 3) {
//         console.log("Katadrome")
//     }
//     else if (x == 4) {
//         console.log("Nialpdrome")
//     }
//     else if (x == 5) {
//         console.log("Repdrome")
//     }
//     else if (x == 6) {
//         console.log("Nondrome")
//     }
    
// }

// digitaldrome(1357)
// digitaldrome(12344)
// digitaldrome(7531)
// digitaldrome(9874441)
// digitaldrome(666)
// digitaldrome(1985)

// 7. Poker Flush?
// Create a function that takes in two arrays and determines whether there exists a flush.
// The first array represents the 5 cards dealt on the table. The second array represents the 2 cards in your hand. Notation: card number and suit (abbreviated as S = Spades, H = Hearts, D = Diamonds, C = Clubs) separated by an underscore.

// function checkFlush(array1,array2){
//     let res = []
//     let check = true

//     for(let i = 0 ; i < array2.length;i++){
//         let chieudai = array2[i].length
//         res.push(array2[i][chieudai - 1])
//     }
//     array1 = array1.concat(res)

//     for(let j = 0 ; j  < res.length ; j++){
//         let count = 0
//         let a = res[j]
//         for(let i = 0 ; i < array1.length; i++){
//             let chieudai = array1[i].length
//             if(a==array1[i][chieudai - 1]){
//                 count += 1
//             }
//         }
//         // console.log(count)
//         if(count < 5){
//             check = false
//         }
//     }
    
//     console.log(check)
// }

// checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"])
// checkFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"])
// checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"])

// 8. Dice Gambling
// Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions:
// If a 1 is rolled, that is bad luck. The next roll counts as 0. If a 6 is rolled, that is good luck. The next roll is multiplied by 2. The array length will always be 3 or higher.

// function rolls(array) {
//     if (array.length < 3) {
//         console.log("The array length will always be 3 or higher.")
//     }
//     else {
//         let sum = 0
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] == 6 && array[i + 1] == 1) {
//                 array[i + 1] = array[i + 1] * 2
//                 array[i + 2] = 0
//             }
//             else if (array[i] == 1 && array[i + 1] == 6) {
//                 array[i + 1] = 0
//                 array[i + 2] = array[i + 2] * 2
//             }
//             else if (array[i] == 1) {
//                 array[i + 1] = 0
//             }
//             else if (array[i] == 6) {
//                 array[i + 1] = array[i + 1] * 2
//             }
//             sum += array[i]
//         }
//         console.log(sum)
//     }
// }

// rolls([1, 2, 3])
// rolls([2, 6, 2, 5])
// rolls([6, 1, 1])
// rolls([1, 6, 5])
// rolls([1, 5])