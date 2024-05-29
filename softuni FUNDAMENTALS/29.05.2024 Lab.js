// const nums = [1,2,3,4]
// nums[0]=54
// nums[nums.length-1]=54
// nums[nums.length] = 504
// nums[nums.length] = 13
// nums.push(77)
// console.log(nums);
// let hello =['hello']
// console.log(hello[0][2]);//[0] - e pyrviqt element ot stringoviq masiv [2] vtorite skobi accesvat char po index
// // kogato izlezem ot masiva udvoqva masiva za da moje da udovletvori iziskvaneto

// const numbers = [1,2,3]
// numbers.push(14)
// console.log('array: ',numbers);
// console.log('arrat include: ',numbers.includes(33));
// console.log('array include: ',numbers.includes(3));
// console.log('array include: ',numbers.toString());
// console.log('array include: ',numbers.join('zdrasti'));
// console.log('array include: ',numbers.join(' '));
// console.log('array include: ',numbers.join('='));
// console.log('array include: ',numbers.join(', '));



// function solve(nums) {
//     const firstElement = nums[0]
//     const secondElement = nums[nums.length-1]
//     console.log(firstElement+secondElement);
// }
// solve([20,30,40])
// solve([5,10])
// solve([2])

// function dayOfWeek(day) {
//     const days = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`]
//     if (day>=1 && day<=7) {
//         console.log(days[day-1]);
//     }else console.log(`Invalid day!`);
// }
// dayOfWeek(0)

// function reverseArray(n,arr) {
//     let newArr=[]
//     let output=''
//     for (n-1; n-1 >= 0; n--) {
//         newArr.push(arr[n-1])
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         output+=newArr[i]+' '
        
//     }
//     console.log(output);
// }
// reverseArray(3, [10, 20, 30, 40, 50])

// function reverseInPlace(arr) {
//     let output=''
//     for (let i=arr.length-1; i>=0; i--) {
//         output+=arr[i]+' '
//     }
//     console.log(output);
// }
// reverseInPlace(['a', 'b', 'c', 'd', 'e'])

// function sumEvenNums(arr) {
//     let sum = 0
//     let digit = 0
//     for (let i = 0; i < arr.length; i++) {
//         digit = Number(arr[i])
//         if (digit%2===0) {
//             sum+=digit
//         }
//     }
//     console.log(sum);
// }
// sumEvenNums(['1','2','3','4','5','6'])
// sumEvenNums(['2','4','6','8','10'])

// function evenSubtractOdd(arr) {
//     let odd = 0
//     let digit = 0
//     let even = 0
//     for (let i = 0; i < arr.length; i++) {
//         digit = Number(arr[i])
//         if (digit%2===0) {
//             even+=digit
//         }else odd+=digit
//     }
//     console.log(even-odd);
// }
// evenSubtractOdd([1,2,3,4,5,6])
// evenSubtractOdd([2,4,6,8,10])

// function equalArr(arr1,arr2) {
//     let sum = 0
//     let digit =0
//     let digit2=0
//     let breaker = 0
//     for (let i = 0; i < arr1.length; i++) {
//         digit=Number(arr1[i])
//         digit2=Number(arr2[i])
//         sum+=digit
//         if (digit!==digit2) {
//             console.log(`Arrays are not identical. Found difference at ${i} index`);
//             breaker++
//             break
//         }
//     }
//     if (breaker===0) {
//         console.log(`Arrays are identical. Sum: ${sum}`);
//     }
// }
// equalArr(['10','20','30'],['10','20','30'])
// equalArr(['1','2','3','4','5'],['1','2','4','4','5'])
// equalArr(['1'], ['10'])

// function condenceToOneNum(arr) {
//     let condenced =[]
//     let cond = arr.length
//     let digit1=0
//     let digit2=0 
//     for (let i = 0; i <= cond+1; i++){
//         if (arr.length===1) {
//             break
//            }
//         for (let i = 0; i < arr.length; i++) {
//             digit1=arr[i]
//             digit2=arr[i+1]
//             if (digit2 === undefined) {
//                 break
//             }
//             condenced.push(digit1+digit2)
//         }
//        arr=condenced
//        condenced=[]
//     }
//     console.log(Number(arr));
// }
// condenceToOneNum([2,10,3])
// condenceToOneNum([5,0,4,1,2])
// condenceToOneNum([1])
// condenceToOneNum([2,10,3,4])
// condenceToOneNum([2,5,6,7,8,9])