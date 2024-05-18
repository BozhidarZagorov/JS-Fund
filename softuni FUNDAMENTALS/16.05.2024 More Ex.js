// function sortNum(one,two,three) {
//     const numbers = [one,two,three]
//     numbers.sort(function(a,b){return b-a})      // sorting the array from biggest to lowest
//     for (let i = 0; i < 3; i++) {
//         console.log(numbers[i]);
//     }
// }

// sortNum(2,1,3)
// sortNum(-2,1,3)
// sortNum(0,0,2)

//function numToWord(input) {
//    let a=input%10
//    console.log(a);
//    if (a === 0) {
//        console.log(`zero`);
//    }else if (a === 1) {
//       console.log(`one`);
//    }else if (a === 2) {
//        console.log(`two`);
//    }else if (a === 3) {
//        console.log(`three`);
//    }else if (a === 4) {
//        console.log(`four`);
//    }else if (a === 5) {
//        console.log(`five`);
//    }else if (a === 6) {
//        console.log(`six`);
//    }else if (a === 7) {
//        console.log(`seven`);
//   }else if (a === 8) {
//        console.log(`eight`);
//    }else if (a === 9) {
//        console.log(`nine`);
//    }
//}

//numToWord(1643)
//numToWord(512)
//numToWord(1)
//numToWord(20)

// function reverseString(input) {
//     const reversed =  Array.from(input).reverse().join("");
//     console.log(reversed);
// }
// reverseString("Hello")



// function distance(x1,y1,x2,y2) {
//     console.log(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)))      //  √(x2−x1)2+(y2−y1)2 distance between two points
// }
// distance(2,4,5,0)
// distance(2.34, 15.66, -13.55, -2.9985)

//////////////////////////////////////////////////////////////////////////////////////////
// thats not ok

// function nextDayBadExample(year,month,day) {
//     day+=1
//     if (day===31) {
//         day=1
//         month+=1
//     }
//     if (month>12) {
//         month-=12                       // ne sym syglasen 4e do tuk trqbvashe da se stiga s hard codvane dori godinata ne e popravena s funkciq date stavat nqkvi stranni neshta fix
//     }
//     if (year<1900) {
//         year+=1900
//     }
//     console.log(`${year}-${month}-${day}`);
// }
// nextDayBadExample(2016,9,30)
// nextDayBadExample(2020,3,24)
// nextDayBadExample(1951,12,24)
// nextDayBadExample(1,1,1)
