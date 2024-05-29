// function digit(word) {
//     switch (word) {
//         case 'zero':
//             console.log(0);
//             break;
//         case 'one':
//             console.log(1);
//             break;
//         case 'two':
//             console.log(2);
//             break;
//         case 'three':
//             console.log(3);
//             break;
//         case 'four':
//             console.log(4);
//             break;
//         case 'five':
//             console.log(5);
//             break;
//         case 'six':
//             console.log(6);
//             break;
//         case 'seven':
//             console.log(7);
//             break;
//         case 'eight':
//             console.log(8);
//             break;
//         case 'nine':
//             console.log(9);
//             break;    
//         default:
//             break;
//     }
// }
// digit('nine')

// function solve(num) {
//     let isPrime = true;
//     for (let divisor = 2; divisor < num; divisor++) {
//         if (num % divisor === 0) {
//             isPrime = false;
//         }
//     }
//     console.log(isPrime);
// }
// from correction task after the correction

//V = (1/3)πr2h
//A = πr(r + √(r2 + h2))

// function cone(r,h) {
//     let V = Math.PI*r*r*h/3
//     let A = Math.PI*r*(r+Math.sqrt(r*r + h*h))
//     console.log(`volume = ${V.toFixed(4)}`);
//     console.log(`area = ${A.toFixed(4)}`);
// }
// cone(3,5)

// function max(one,two,three) {
//     maxNum=Math.max(one,two,three)
//     console.log(maxNum);
// }
// max(130,7,3)

// function binToDec(bin) {
//     let dsdd=parseInt(bin, 2)
//     console.log(dsdd);
// }
// binToDec(`00001001`)

// function areaOfTriangle(a,b,c) {
//     let s = (a+b+c)/2
//     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     console.log(area);
// }
// areaOfTriangle(2,3.5,4)