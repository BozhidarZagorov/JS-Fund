// .push()-add to end       //tuk syshto moje po nqkolko
// .pop()-remove from end   // moje da se peisvoi posledniqt element
// .unshift() add to start  //mojem po nqkolko elementa da se dobavqt v edni skobi
// .shift()-remove from start
// .includes()-check element if in //trasira dali ima syotveten element vytre vryshta true/false
// .indexOf()-returns the index of the element  // ako elementa go nqma v masiva vryshta -1

// const arr = []

// for (let i = 0; i < 100; i++) {
//     arr.push(i+1);
// }
// console.log(arr);
// console.log('---------------');
// for (let i = 0; i < 50; i++) {
//     arr.pop()
// }
// console.log(arr);

// const arrMassiv = [
//     [22,33,44,55] //arr[0][0] pyrvite skobi sa za koi arr a vtorite koi element ot tozi arr
//     [23,32,45,54] // arr[2]
// ]

// function calcFirstAndLast(arr) {
//     if (arr.length===1) {
//         console.log(Number(arr[0]+Number(arr[0])));
//         return
//     }
//     const firstNum=Number(arr.shift())
//     const LastNum=Number(arr.pop());
//     console.log(firstNum+LastNum);
// }
// calcFirstAndLast(["5","10","15"])

// https://github.com/tsvetis/JS-Fundamentals-May2024

// function negativePositiveNums(arr) {
//     const result = []

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//         if (arr[i]>=0) {
//             result.push(arr[i])
//         }else result.unshift(arr[i]) 
//     }
//     console.log(result);
// }
// //input
// negativePositiveNums([7,-2,8,9])
// negativePositiveNums([3,-2,0,-1])
// negativePositiveNums([-3,2,-1,0])



// const arr=[1,2,3,4]
// const clonedArr=arr.slice() // arr.slice(1) shte clonira arr ot index 1 natatyk  moje i arr.slice(1,3) no ne vryshta elementa na index 3 log shte e [2,3]
// console.log('original',arr);
// console.log('cloned',arr);


// const nums = [5,10,15,20,25,30]

// const splicedArray=nums.splice(1,4)
// console.log(nums);
// console.log(splicedArray);


// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');                  // vtorata cifra e kolko elementa se zamenqt  ako se zadade samo edin element a imame 2 pyrviqt element shte zamesti na mqstoto na indexa a vtoriqt shte byde pushnat sled nego
// // Replaces 1 element at index 4             // ako pyk imame samo 1 element no zamestvame 2 elementa zamestva elementa na syotvedniqt index i trie elementa na index+1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// function firstKnums(arr) {
//     const k=arr[0]
//     const copy=arr.slice(1)
//     const firstResult=copy.slice(0,k)
//     const secondResult=copy.slice(-k)                   //s -k vzima poslednite 
//     console.log(firstResult);
//     console.log(secondResult)
    
// }
// firstKnums([2,7,8,9])

// function sumLastKeyNums(n,k) {
//     const result =[1]
//     for (let i = 1; i < n; i++) {
//         let lastK=result.slice(-k)
//         let sum = 0
//         for (let num of lastK){
//             sum+=num
            
//         }
//         result.push(sum)
//     }
//     console.log(result.join(" "));
//     // const arr=[1,1,2]
// }
// sumLastKeyNums(6,3)
// sumLastKeyNums(8,2)
// sumLastKeyNums(9,5)


// const strArr=['Hello',`Hi`,`zdr`,`Ciao`]
// const newArray = strArr.map((x)=>x.length)
// console.log(newArray);

// const newArr=[true,false,true,false,true,true].map((e)=>{
//     return e ? 1 : 0
// })
// console.log(newArr);

// const newArr = [1,2,3,4,5].map((num)=>{
//     if (num%2===0) {
//         return "Even: "+ num
//     }
//     return "Odd: "+ num
// })
// console.log(newArr);

// function myMap(array,callbackFn) {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const result=callbackFn(element,i)
//         output.push(result)
//     }
//     return output
// }
// const x =myMap([`2`,`3`,`4`,`21`],(e)=>Number(e))
// console.log(x);


// const arr = [1,2,3,4,5,6,7,8,9,10]
// // const newArr = arr.filter((num)=>num%2===0)
// // console.log(newArr);

// function myFilter(array,predicate) {
//     let result = []
//     for (const item of array) {
//         // console.log(item);
//         if (predicate(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// const getEvenNums = (n) =>n%2===0
// const getOddNums = (n) =>n%2!==0
// const x =myFilter(arr,getEvenNums)
// console.log(x);

// function processOddNums(arr) {
//     const newArr=[]
//     for (let index = 0; index < arr.length; index++) {
//         const num = arr[index]
//         if (index%2!==0) {
//             const oddNum = num*2
//             newArr.unshift(oddNum)
//         }
//     }
//     console.log(newArr.join(' '));
// }
// processOddNums([10,15,20,25])
// processOddNums([3,0,10,4,7,3])


// const arr = [1,2,13,11,-7,77,19]
// console.log(arr);
// const sorted = arr.sort((a,b)=>{
// if (a<b) {
//     return -1
// }else if (a>b) {
//     return 1    
// } else return 0
// })
// console.log(sorted);

// const sortedASC=arr.sort((a,b)=>a-b)
// console.log(sortedASC);
// const sortedDESC=arr.sort((a,b)=>b-a)
// console.log(sortedDESC);

// const strArr=[`bubble`,`bun`,`duck`,`alpha`]
// strArr.sort((a,b)=>a.localeCompare(b))
// console.log(strArr);
// strArr.sort((a,b)=>b.localeCompare(a))
// console.log(strArr);

// function smallestTwoNums(arr) {
//    const NewSortedArr =  arr.sort((a,b)=>a-b)
//    console.log(NewSortedArr.slice(0,2).join(` `));
// }
// smallestTwoNums([30,15,50,5])