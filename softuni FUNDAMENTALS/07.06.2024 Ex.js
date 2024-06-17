// function addAndSubtrackt(num1,num2,num3) {
    
//     function sum(x,y) {
//         return x+y
//     }
//     function subtract(x,y) {
//         return x-y
//     }
//     const sumFirstNums=sum(num1,num2)
//     const result = subtract(sumFirstNums,num3)
//     console.log(result);
// }
// addAndSubtrackt(23,6,10)

// function charsInRange(char1,char2) {
//     const code1=char1.charCodeAt()
//     const code2=char2.charCodeAt()
//     let middleChars = []
    
//     const startCode=Math.min(code1,code2)
//     const endCode=Math.max(code1,code2)

//     for (let curCode = startCode+1; curCode < endCode; curCode++) {
//         const curChar = String.fromCharCode(curCode)
//         middleChars.push(curChar)
//     }
//     console.log(middleChars.join(' '));
// }
// charsInRange('d','a')

// function palindromeInts(arr) {
//     function checkPalindrome(num) {
//         const numString = num+""
//         let numStringReversed = ''

//         for (let i = numString.length-1; i >= 0; i--) {
//             const curChar = numString[i]
//             numStringReversed+=curChar
//         }
//         // if (numStringReversed === numString) {
//         //     return true
//         // }else{
//         //     return false
//         // }
//         return numStringReversed === numString   //vryshta true ili false
//     }
//     for (const num of arr) {
//         console.log(checkPalindrome(num))
//     }
// }
// palindromeInts([32,2,232,1010])

// function passwordValidator(password) {
//     function checkLen(pass) {
//         if (pass.length>=6 && pass.length <=10) {
//             return true
//         }else{
//             console.log("Password must be between 6 and 10 characters");
//             return false
//         } 
//     }
//     function checkIfAlphanumeric(pass) {
//         const pattern = /^[A-Za-z0-9]+$/       //checkva za bukvi i cifri bez specialni simvoli regex /\w+/ drug variant na tova e /[A-Za-z0-9]+/

//         if (pattern.test(pass)) {           //s .test proverqva iziskvaneto na patern vyrhu stringa
//             return true
//         }else{
//             console.log("Password must consist only of letters and digits");
//             return false
//         }
//     }
//     function checkIf2Digits(pass) {
//         const pattern = /[0-9]{2,}/            //tyrsi cifra ot 0 do 9 v {2} tyrsim zadyljitelno 2 ne pove4e ne pomalko cifri a pri {2,} tyrsim ot 2 cifri nagore

//         if (pattern.test(pass)) {
//             return true
//         }else{
//             console.log("Password must have at least 2 digits");
//             return false
//         }
//     }
//     const isValidLength=checkLen(password)
//     const isValidAlpha=checkIfAlphanumeric(password)
//     const hasMin2Digits = checkIf2Digits(password)

//     if (isValidLength&&isValidAlpha&&hasMin2Digits) {
//         console.log("Password is valid");
//     }
    
// }
// passwordValidator('logIn23')

// function perfectNum(num) {
//     let sumProperDivisors=0
//     for (let divisor = 1; divisor < num; divisor++) {
//         if (num%divisor===0) {
//             sumProperDivisors+=divisor
//         }
//     }
//     if (sumProperDivisors===num) {
//         console.log("We have a perfect number!");
//     }else console.log("It's not so perfect.");
// }
// perfectNum(6)
// perfectNum(28)
// perfectNum(1236498)

// function factorialDivision(num1,num2) {
//     function calculateFactorial(num) {
//         let factorial=1
//         for (let factor=2;  factor<= num; factor++) {
//             factorial *=factor 
//         }
//         return factorial
//     }
//     const factorial = calculateFactorial(num1)
//     const factorial2=calculateFactorial(num2)
//     const quotient = factorial/factorial2
//     console.log(quotient.toFixed(2))
// }
// factorialDivision(5,2)
// factorialDivision(6,2)

// function loadingBar(num) {
//     function setUpBar(percentLoaded) {
//         const percentSymbolCount=percentLoaded/10
//         const dotSymbolCount = 10-percentSymbolCount
//         const percents="%".repeat(percentSymbolCount)
//         const dots=".".repeat(dotSymbolCount)
//         const bar =`[${percents}${dots}]`
//         return bar
//     }
//     const resultBar = setUpBar(num)
//     if (num === 100) {
//         console.log(`100% Complete!`);
//         console.log(resultBar);
//     }else{
//         console.log(`${num}% ${resultBar}`);
//         console.log(`Still loading...`);
//     }
// }
// loadingBar(30)

    // function smallestNumOfThree(a,b,c) {
    //     const result=Math.min(a,b,c)
    //     console.log(result);
    // }
    // smallestNumOfThree(2,5,3)
    // smallestNumOfThree(600,342,123)


// function oddAndEvenSum(num) {
//     const stringedNum = num+''
//     let oddSum=0
//     let evenSum=0
//     for (let i = 0; i < stringedNum.length; i++) {
//         const element = Number(stringedNum[i])
//         if (element%2===0) {
//             evenSum+=element
//         }else oddSum+=element
//     }
//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
// }
// oddAndEvenSum(1000435)
// oddAndEvenSum(3495892137259234)

// function matrixNxN(num) {
//     const element = num+' '
//     for (let i = 0; i <num; i++) {
//         console.log(element.repeat(num));
//     }
// }
// matrixNxN(3)
// matrixNxN(7)
