// let str = 'Hello'+', '+'JS'
// str+='!'
// console.log(str);
// console.log(str.length)
// // console.log(str[0]);
// // console.log(str[5]);
// // console.log(str[str.length-1]);

// for (const s of str) {
//     console.log(s);
// }
// for (let i = 0; i < str.length; i++) {
//     console.log(`index: ${i}, char: ${str[i]}`);
    
// }

// function printChars(word) {
//     for (const char of word) {
//         console.log(char);
//     }
// }
// printChars('AWord')

// const greeting = 'Hello'+', '
// // str+='JS!'                  //Error reassining to const
// const heSaid='He said: '
// const result=heSaid.concat(greeting)     //concat = concat-enirane
// console.log(result);

// let result = 'Hello, JavaScript dev!'
// console.log(result.indexOf('Java'));
// console.log(result.indexOf('Bob'));     //kogato ne nameri tyrseneto v stringa vryshta -1
// console.log(result.indexOf('Script'));
// console.log(result.lastIndexOf('e'));   //izkarva index na posledno sreshtnat char ili duma v str //ako ne go nameri vryshta -1
// console.log(result.substring(5,10));    //vryshta  ot 5ti do 10ti index // ako izleze izvyn ramkite na str ne gyrmi a si vryshta do poslednoto
// console.log(result.substring(5));        // vryshta vsi4ko ot 5 natatyk


// let text = 'Hello there from softuni.bg. You are welcome! abv.bg'
// const x = text.replace('bg','com')      //replaceva pyrvoto bg
// console.log(x);
// console.log(x.replace('bg','com'));      //replaceva vtoroto bg
/////////////////////////////////////
// console.log(text.replaceAll('.bg','.com')); //replaceva vsi4ki .bg s .com
/////////////////////////////////////

// function solve(str,startIndex,count) {
//     const endIndex = startIndex+count
//     const result=str.substring(startIndex,endIndex)
//     console.log(result);
// }
// solve('ASentance',1,8)
// solve('JavaScript',4,6)

// const msg = 'Hello from JS Fundamentals!'
// const msg2='I love fruits!'
// console.log(msg.split('JS'));
// console.log(msg2.includes('fruit'));        // true
// console.log(msg2.includes('Fruit'));        //false //case sensitive 


// console.log('*'.repeat(1));
// console.log('*'.repeat(2));
// console.log('*'.repeat(3));
// console.log('*'.repeat(4));

// function repeat(str,count) {
//     let result=''
//     for (let i = 0; i < count; i++) {
//         result+=str
        
//     }
//     console.log(result);
// }
// repeat('*',5)
// repeat('*',4)
// repeat('*',3)
// repeat('*',2)
// repeat('*',1)

// function solve(text,word) {
//     // console.log(text);
//     // console.log(word);
//     // console.log(text.includes(word));
//     let result = text
//     const censoredWord = '*'.repeat(word.length)

//     while(result.includes(word)) {
//         result = result.replace(word,censoredWord)
//     }
//     console.log(result);
// }
// solve('A small sentence with some words small .small','small')

// const trimMeStr='      THis string needs to be trimmed        '
// console.log(trimMeStr);
// console.log(trimMeStr.trim());
// console.log(trimMeStr.trimStart()); //trimva samo v na4aloto
// console.log(trimMeStr.trimEnd()); //trimva samo v kraq

// const text = 'My name is John!'
// console.log(text.startsWith('My')); //vryshta true ili false
// console.log(text.startsWith('!'));
// console.log(text.startsWith('My name is John!')); //moje celi izrazi syshto
// console.log(text.endsWith('John!')); //vryshta pak true ili false no ot kraq

// let text = 'Tsveti'
// console.log(text.padStart(10,'*')); // zapylva ot na4aloto s tova koeto e zadadeno kogato string.length e po malko ot zadadenoto
// console.log(text.padEnd(10,'^')); // zapylva v kraq

// function solve(sentence,word) {
//     let count=0
//     const wordsArray = sentence.split(' ')
//     for (const w of wordsArray) {
//         if (w===word) {
//             count++
//         }
//     }
//     console.log(count);
// }
// solve('This is a new sentence that is is something for testing.', 'is')



function solve(input) {
    let n = input[0]
    let rows = input.slice(1)
    let kRowIndex = null
    let kIndex=null
    let isOut = false
    let steps = 0
    let lastRightRowIndex = rows[0].length-1
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if(row.includes('k')){
            kRowIndex=i
            kIndex=row.indexOf("k")
            break
        }
    }
    if (kIndex-1<0) {
        isOut=true
        steps+=1
    }
    if (kIndex+1 ===lastRightRowIndex+1) {
        isOut=true
        steps+=1
    }
    if (!isOut) {
        for (let i = 0; i < 50; i++) {
            if (isOut) {
                break
            }
            
            if (rows[kRowIndex][kIndex-1]===' ') {
                while (rows[kRowIndex][kIndex-1]===' ') {
                    let rowArr = rows[kRowIndex].split('')

                    rowArr[kIndex-1]='#'
                    rowArr[kRowIndex]=rowArr.join('')
                    kIndex-=1
                    steps+=1
                    if (kIndex===0) {
                        steps+=1
                        isOut=true
                        break
                    }
                }
            }
            if (rows[kRowIndex][kIndex+1]===' ') {
                while (rows[kRowIndex][kIndex+1]===' ') {
                    let rowArr = rows[kRowIndex].split('')

                    rowArr[kIndex+1]='#'
                    rowArr[kRowIndex]=rowArr.join('')
                    kIndex-=1
                    steps+=1
                    if (kIndex===lastRightRowIndex) {
                        steps+=1
                        isOut=true
                        break
                    }
                }
            }
            if (rows[kRowIndex -1]&& rows[kRowIndex-1][kIndex]===' ') {
                while (rows[kRowIndex -1]&& rows[kRowIndex-1][kIndex]===' ') {
                    let rowArr = rows[kRowIndex-1].split('')
                    rowArr[kIndex+1]='#'
                    rowArr[kRowIndex-1]=rowArr.join('')
                    kRowIndex-=1
                    steps+=1
                    if (kRowIndex===0) {
                        steps+=1
                        isOut=true
                        break
                    }
                }
            }
            if (rows[kRowIndex +1]&& rows[kRowIndex+1][kIndex]===' ') {
                while (rows[kRowIndex +1]&& rows[kRowIndex+1][kIndex]===' ') {
                    let rowArr = rows[kRowIndex+1].split('')
                    rowArr[kIndex+1]='#'
                    rowArr[kRowIndex+1]=rowArr.join('')
                    kRowIndex-=1
                    steps+=1
                    if (kRowIndex===lastRightRowIndex) {
                        steps+=1
                        isOut=true
                        break
                    }
                }
            }
        }
    }
    if (isOut) {
        console.log(`Kate got out in ${steps} moves`);
    }else{
        console.log(`Kate cannot get out`);
    }

}
solve([
    4,
    "######",
    "##  k#",
    "## ###",
    "## ###"
  ])
//   solve([
//     5,
//     "######",
//     "##  k#",
//     "## ###",
//     "######",
//     "## ###"
//   ]
//   )