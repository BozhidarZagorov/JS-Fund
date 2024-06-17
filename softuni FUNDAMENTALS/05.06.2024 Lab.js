//functional programing raboti se s funkcii
//object oriented programing raboti se s obekti 

// function printStar(count) {
//     console.log("*".repeat(count));
// }
// printStar(8)

/////////////////////////////////////////////////////
// function sumAndMulty(x,y) {
//     return (x+y)*2
// }
// function solve(a,b,c,d,e,f,g,h) {
//     const sum1=sumAndMulty(a,b)
//     const sum2=sumAndMulty(c,d)
//     const sum3=sumAndMulty(e,f)
//     const sum4=sumAndMulty(g,h)

//     const result = sum1/sum2/sum3/sum4
//     console.log(result);
// }
// solve(2,3,4,5,6,7,8,9)
////////////////////////////////////////////////////

// print1("Text from function declaration works here too") // is being HOISTED

// //function declaration
// function print1(text) {
//     console.log(text);
// }
// print1("Text from function declaration")


// // print2("text from function expression does NOT work here")// is NOT being HOISTED 

// //function expression
// const print2 = function (text) {
//     console.log(text);
// }
// print2("text from function expression")

// function myRecursion(x) {
//     let y=x*2
//     console.log(y);

//     if (y<100) {                 // stackoverfloll without the if
//         myRecursion(y)          //recursion
//     }
                         
// }
// myRecursion(5)


// function formatGrade(grade) {
//     let result = ""
//     if (grade<3) {
//         //fail
//         result=(`Fail (2)`);
//     }else if (grade>=3 && grade<3.5) {
//         //poor
//         result=(`Poor (${grade.toFixed(2)})`);
//     }else if (grade>=3.5 && grade<4.5) {
//         //good
//         result=(`Good (${grade.toFixed(2)})`);
//     }else if (grade>=4.5 && grade<5.5) {
//         //very good
//         result=(`Very good (${grade.toFixed(2)})`);
//     }else {
//         result=(`Excellent (${grade.toFixed(2)})`);
//     }
//     return result
// }
// formatGrade(3.33)
// formatGrade(4.5)
// formatGrade(2.99)
// formatGrade(5.49)
// formatGrade(5.60)

// function matPower(num,power) {
//     // const result = number ** power
//     const result=Math.pow(num,power)
//     console.log(result);
// }
// matPower(2,8)
// matPower(3,4)

// function sum(a,b) {
//     //guard clauses
//     if (a<0||b<0) {
//         return `One or more param is negative num`
//     }
//     console.log(a+b);
//     return a+b

//     console.log(a+b);       // return v tozi slu4ai spira funkciqta
// }

// let result = sum(5,2)
// console.log("Result: ",result);


// function getBiggerNum(a,b) {
//     if(a>=b){
//         return a                    // else ne e nujen poradi return
//     }
//     return b
// }
// function matPower(num) {
//     return num**2
// }
// const result = (getBiggerNum(5,15)*2)**2
// console.log(result);

// function repeatString(str,count) {
//     let result = ""
//     for (let i = 0; i < count; i++) {
//         result+=str
//     }
//     // console.log(result);
//     return result
// }
// repeatString("abc",3)
// repeatString("String",2)

// function doubleEvenNumbers(number) {
//     if (number%2===0) {
//         return number*2
//     }
//     return number
// }
// function solve(arr) {
//     const result=[]
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i]
//         // console.log(num);
//         result.push(doubleEvenNumbers(num))
//     }
//     console.log(result);
// }
// solve([1,2,3,4])



// function printCertificate(graded,firstAndLastName) {
//     const gradeMsg = formatGrade(graded)
//     console.log(`-----     @     -----`);
//     console.log(`-----Certificate-----`);
//     console.log(`-----     @     -----`);
//     console.log(`    ${firstAndLastName[0]} ${firstAndLastName[1]}`);
//     console.log(`   ${gradeMsg}`);
// }
// printCertificate(5.25,["Peter","Ivanov"])

// //////////////////////////////////////////////
// let increment = x=>x+1              // arrow (=>) si pravi sam return zatova se maha
// console.log(increment(5));
// ////these two are the same
// let incrementSame=function (xSame) {
//     return xSame+1
// }
// ///////////////////////////////////////////////
// let sum = (a,b)=>a+b
// console.log(sum(5,6));

// // ako ima pove4e ot edin red kod
// const incrementByNum = (x,y)=>{
//     //some 
//     //logic
//     //here
//     return x+y
// }

//////////////////////////////////////////////////////////////
// //kogato function declaration
// function functionDeclaration() {
// }
//////////////////////////////////////////////////////////////
// //kogato function Expression
// const functionExpression = ()=>{}
//////////////////////////////////////////////////////////////

// function simpleCalc(number1,number2,operator) {
//     //helper functions
//     const multiply=(x,y)=>x*y
//     const sum = (x,y)=>x+y
//     const subtract = (x,y)=>x-y
//     const divide = (x,y)=>x/y
//     //print logic
//     switch (operator) {
//         case "multiply":
//             console.log(multiply(number1,number2));
//             break;
//         case "add":
//             console.log(sum(number1,number2));
//             break
//         case "subtract":
//             console.log(subtract(number1,number2));
//             break
//         case "divide":
//             console.log(divide(number1,number2));
//             break
//         default:
//             break;
//     }
// }
// simpleCalc(5,5,"multiply")



// v tazi lekciq ima obqsnena chessboard


//////////////////////////////////tova e predlojeno ot nqkoi drug
// function chessBoard(num) {
//     let blackMsg = `     <span class="black"></span>`;
//     let whiteMsg = `     <span class="white"></span>`;
//     let row = 1;
//     let field = 1;
//     console.log(`<div class="chessboard">`);
 
//     for (let i = 1; i <= num; i++) {
//         console.log(`  <div>`);
 
//         for (let j = 1; j <= num; j++) {
//             let currentMsg = ''
 
//             if (field % 2 !== 0) {
//                 currentMsg = blackMsg;
//             } else {
//                 currentMsg = whiteMsg;
//             }
//             console.log(currentMsg);
//             field++
//         }
//         console.log(`  </div>`);
 
//         if (row % 2 !== 0) {
//             field = 2;
//         } else {
//             field = 1;
//         }
//         row++;
//     }
//     console.log(`</div>`);
// }


// function shop(item,times) {
//     const cof=(x)=>(x*1.50).toFixed(2)
//     const wat=(x)=>(x*1).toFixed(2)
//     const coke=(x)=>(x*1.40).toFixed(2)
//     const snack=(x)=>(x*2).toFixed(2)
//     switch (item) {
//         case 'coffee':
//             console.log(cof(times));
//             break;
//         case 'water':
//             console.log(wat(times));
//             break;
//         case 'coke':
//             console.log(coke(times));
//             break;
//         case 'snacks':
//             console.log(snack(times));
//             break;
//         default:
//             break;
//     }
// }
// // shop("coffee", 2)
// // shop("water", 5)

// function sighCheck(numOne,numTwo,numThree) {
//     const sum = numOne*numTwo*numThree
//     if (sum>0) {
//         console.log(`Positive`);
//     }else console.log(`Negative`);
// }
// sighCheck(5,12,-15)