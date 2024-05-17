// let const
// never var // vodi do hoisting

// let a // declaration -> syzdava promenliva

// // b=5 -> definira promenliva ili zadavame stoinostta 

// const b =5 // declaration + definition

// const isEqual = b === a
//  console.log(isEqual);

// function solve(x , z) {
//     console.log(x+z);
// }

// solve(10,4)
// solve(55,15)
// solve(153,55)

// zad 1

// function multipl(input) {
//     console.log(input*2);
// }

// multipl(2)

// zad 2

// function Student(name,age,grade) {
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// }
// Student(`Peter`,15 ,5.54678)

// zad 3

// function ExellentG(grade){
//     if (grade>=5.50) {
//         console.log('Excellent');
//     }else console.log('Not excellent');
// }

// function Languages(country) {
//     switch (country) {
//         case 'USA':
//         case 'England':
//             console.log(`English`);    
//             break;
//         case 'Spain':
//         case 'Argentina':
//         case 'Mexico':
//             console.log(`Spanish`);
//             break      
//         default:
//             console.log('unknown');
//             break;
//     }
// }

// Languages(`USA`)
// Languages('Spain')
// Languages('BG')

// function calendar(input) {
//     switch (input) {
//         case 1:
//             console.log(`January`);
//             break
//         case 2:
//             console.log(`February`);
//             break
//         case 3:
//             console.log(`March`);
//             break
//         case 4:
//             console.log(`April`);
//             break
//         case 5:
//             console.log(`May`);
//             break
//         case 6:
//             console.log(`June`);
//             break
//         case 7:
//             console.log(`July`);
//             break
//         case 8:
//             console.log(`August`);  
//             break
//         case 9:
//             console.log(`September`);
//             break
//         case 10:
//             console.log(`October`);
//             break
//         case 11:
//             console.log(`November`);
//             break
//         case 12:
//             console.log(`December`);          
//             break;
//         default:
//             console.log(`Error!`);
//             break;
//     }
// }
// zad 6

// function Theatre(day,age) {
//     if (age<0 || age>122) {
//         console.log(`Error!`);
//     }
//     if (age>=0 && age<=18) {
//         switch (day) {
//             case `Weekday`:
//                 console.log(`12$`);
//                 break;
//             case `Weekend`:
//                 console.log(`15$`);
//                 break
//             case `Holiday`:
//                 console.log(`5$`);
//                 break
//             default:
//                 console.log(`Error!`);
//                 break;
//         }
    
//     }
//     if (age>18 && age<=64) {
//         switch (day) {
//             case `Weekday`:
//                 console.log(`18$`);
//                 break;
//             case `Weekend`:
//                 console.log(`20$`);
//                 break
//             case `Holiday`:
//                 console.log(`12$`);
//                 break
//             default:
//                 console.log(`Error!`);
//                 break;
//         }
    
//     }
//     if (age>64 && age<=122) {
//         switch (day) {
//             case `Weekday`:
//                 console.log(`12$`);
//                 break;
//             case `Weekend`:
//                 console.log(`15$`);
//                 break
//             case `Holiday`:
//                 console.log(`10$`);
//                 break
//             default:
//                 console.log(`Error!`);
//                 break;
//         }
    
//     }
// }

// Theatre(`Weekday`,15)

// zad 7 i 8

// function oneToFive() {
//     for (let i = 3; i <= 99; i+=3) {
//         console.log(i);
//     }
// }

// oneToFive()

// zad 9

// function nToOne(input) {
//     for (input; input> 0; input--) {
//         console.log(input);
//     }
// }

// nToOne(5)

// zad 10

// function fromMtoN(M,N) {
//     for (M;  M>=N; M--) {
//         console.log(M);
//     }
// }

// fromMtoN(6,2)

// function sumOfOddNums(input) {
//     let sum=0
//     let j=1
//     for (let i = 1; j <= input; i+=2) {
//         console.log(i);
//         sum+=i
//         j++
//     }
//     console.log(`Sum: ${sum}`);
// }

// sumOfOddNums(5)