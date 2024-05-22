// let x = 1 // number
// x = 'text' // string
// x = true // boolean
// // let x
// // int double decimal....
// // gore e dobre 'x' da byde samo num ili samo string da ne se smenqt tipovete po sredata na koda v edna i syshta promenliva


// //number
// let peopleCount = 4; // promenlivata da byde taka zadadena 4e da se znae za kakvo e
// //str
// let msgTitle = "Hello"
// //bool
// let hasRegistration = true // za boolean da byde kato vyprositelno zadadeno hasRegistration or isRegistration

// //const, let vs var?

// if (true) {
//     // hoisting a se ka4a v na4aloto na koda i raboti navsqkyde v koda toest si e losha praktika i zatova ne se polzva ve4e
//     var a = 5 // global scope
// }
// var b = 5
// console.log(a);
// if (true) {
//     const c = 3 //block scope
//     let s = 4//block scope
// }
// //const and let // ne se hoistvat
// //console.log(c,s); // error c and s are not defined


// // naming conventions
// //camelCase // peopleCount
// //PascalCase // PeopleCount
// //snake_case//people_count
// //kebab-case//people-count
// echo("Hello, World")
// echo(-55)
// echo({})
// echo(null)
// echo('Kircho')
// echo(undefined)

// console.log("function under");
// function echo(data) {                   //funkciqta taka moje da se hoistva
//     console.log(typeof data);
//     if (typeof data === "string" || typeof data === "number") {
//         console.log(data);
//     }else console.log("Parameter is not suitable for printing");   
// }
// echo2("Hello, World")
// echo2(-55)
// echo2({})
// echo2(null)
// echo2('Kircho')
// echo2(undefined)

// const echo2  = function (data) {                   //funkciqta taka NE MOJE DA SE HOISTVA
//     if (typeof data === "string" || typeof data === "number") {
//         console.log(typeof data);
//     }else console.log("Parameter is not suitable for printing");
    
// }

// 'pesho' + 5 = 'pesho5'
// 5 + 'pesho' = '5pesho' 
//num + string i string + num  e vinagi string

// const country  = 'Bulgaria' // Immutable

// //country[0]="Z" // doesnt work

// country +=" Zdrasti"
// console.log(country);

// function solve(firsname,secondName,symbol) {
//     // console.log(firsname+symbol+secondName);
//     console.log(`${firsname}${symbol}${secondName}`);
// }
// solve('John','Smith',"->")

// function solve(string,symbol,match ) {
//     let result = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i]==="_") {
//             result+=symbol
//         }else result+=string[i]
        
//     }
//     if (result === match) {
//         console.log("Matched");
//     }else console.log("Not Matched");
// }
// solve('Str_ng','o','Strong')

// Number.MAX_SAFE_INTEGER  nai golqmo
// Number.MIN_SAFE_INTEGER  nai malko

// function solve(a,b,c) {
//     let isFloat = false
//     const sum = a+b+c
//     const sumString = `${sum}` //string(sum)
//     for (let i = 0; i < sumString.length; i++) {
//         if (sumString[i]===".") {
//             isFloat=true
//             break
//         }
//     }
//     // console.log("isFloat",isFloat);
//     const output = isFloat ? `Float` : `Integer`         // pyrvoto e ako e true drugoto e pri false interesen variant 5===5 ? 'print true' : 'print false'
//     console.log(`${sum} - ${output}`);                   //                                                            5!==5 ? 'print false' : 'print true'
//     // if (isFloat) {
//     //     console.log(`${sum} - Float`);
//     // }else console.log(`${sum} - Integer`);
// }
// solve(9,100,1.1)
// solve(1,2,3.123)
// solve(100,200,300)

        //FALSY
// Boolean(undefined) //false
// Boolean(0)         //false
// Boolean(-0)        //false
// Boolean("")        //false
// Boolean(false)     //false
// Boolean(null)      //false
// Boolean(10/'p')    //false
// Boolean(NaN)       //false

// function amazing(num) {
//     const stringyNum = `${num}`
//     let sum = 0
//     for (let i = 0; i < stringyNum.length; i++) {
//         // console.log(`Index${i}: ${stringyNum[i]}`);
//         sum+=Number(stringyNum[i])
//     }
//     let isAmazing = 'False'
//     const stringySum = `${sum}`
//     for (let i = 0; i < stringySum.length; i++) {
//         if (stringySum[i]==='9') {
//             isAmazing = 'True'
//         }
//     }
//     console.log(`${num} Amazing? ${isAmazing}`);
// }
// amazing(999)
// amazing(1233)
