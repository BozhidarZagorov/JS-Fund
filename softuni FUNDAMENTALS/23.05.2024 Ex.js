// function sumDigits(num) {
//     let sum = 0
//     // let numStr = num.toString()
//     let numStr = num + ''  //stringova go

//     for (let i = 0; i < numStr.length; i++) {
//         let curDigit=Number(numStr[i])
//         sum+=curDigit
//     }
//     console.log(sum);
// }
// sumDigits(255)
// sumDigits(245678)

// function charToStr(a,b,c) {
//     console.log(a+b+c);
// }
// charToStr(`a`,`b`,`c`)
// charToStr('%','2','o')

// function town(town,population,area) {
//     console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
// }
// town('Sofia',1286383,492)

// function mToKm(metres) {
//     console.log((metres/1000).toFixed(2));
// }
// mToKm(1852)
// mToKm(798)

// function poundsToDollars(pounds) {
//     console.log((pounds*1.31).toFixed(3));
// }
// poundsToDollars(80)

// function reversedChars(a,b,c) {
//     console.log(`${c} ${b} ${a}`);
// }
// reversedChars('A','B','C')

// function lowerOrUpper(ch) {
//     if (ch === ch.toUpperCase()) {
//         console.log(`upper-case`);
//     }else console.log(`lower-case`);
// }
// lowerOrUpper(`L`)
// lowerOrUpper('f')

// function calculator(num1,operator,num2) {
//     let result = 0
//     switch (operator) {
//         case '+':
//             result = num1+num2
//             break;
//         case '-':
//             result=num1-num2
//             break
//         case '*':
//             result = num1*num2
//             break
//         case '/':
//             result=num1/num2
//             break
//         default:
//             break;
//     }
//     console.log(result.toFixed(2));
// }
// calculator(5,'/',10)

// function gladiatorExpenses(lostFights,helmPrice,swordPrice,shieldPrice,armorPrice) {
//     let expenses = 0
//     for (let currLostFight=1;  currLostFight<= lostFights; currLostFight++) {
//         if (currLostFight%2 === 0) {
//             expenses+=helmPrice
//         }
//         if (currLostFight%3 === 0) {
//             expenses+=swordPrice
//         }
//         if (currLostFight%6 === 0) {
//             expenses+=shieldPrice
//         }
//         if (currLostFight%12 === 0) {
//             expenses+=armorPrice
//         }   
//     }
//     console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
// }
// gladiatorExpenses(7,2,3,4,5)
// gladiatorExpenses(23,12.50,21.50,40,200)

// more ex 
// console.log(parseInt(binaryNum, 2)); На 5та зад. от more exercise решението