//CHECK MDN
// function common(arr1,arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         let curEl=arr1[i]
//         if (arr2.includes(curEl)) {
//             console.log(curEl);
//         }
//     }
// }
// common(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])

// function addAndSub(arr) {
//     let evenSumI = 0
//     let oddSumI = 0
//     let originalSum=0
//     let arr2=[]
//     for (let i = 0; i < arr.length; i++) {
//         let curEl = arr[i]
//         originalSum+=arr[i]
//         if (curEl%2===0) {
//             evenSumI+=curEl+i
//             arr2.push(curEl+i)
//         }else{
//             oddSumI+=curEl-i
//             arr2.push(curEl-i)
//         }
//     }
//     console.log(arr2);
//     console.log(originalSum);
//     console.log(evenSumI+oddSumI);
// }
// addAndSub([5, 15, 23, 56, 35])

// function arrRotate(arr,rotations) {
//     for (let curRotation = 1; curRotation <= rotations; curRotation++) {
//         let el=arr.shift()
//         arr.push(el)
//     }
//     console.log(arr.join(' '));
// }
// arrRotate([51, 47, 32, 61, 21], 2)

// function mergeArr(arr1,arr2) {
//     let arr3=[]
//     for (let i = 0; i < arr1.length; i++) {
//         if (i%2===0) {
//             arr3[i]=Number(arr1[i])+Number(arr2[i])             //arr3.push(sum) drug variant
//         }else arr3[i]=arr1[i]+arr2[i]
//     }
//     console.log(arr3.join(' - '));
// }
// mergeArr(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])

// function maxNumber(arr) {
//     let topNums=[]
//     for (let i = 0; i < arr.length; i++) {
//         let curNum=arr[i]
//         let isTop=true
//         for (let j = i+1; j < arr.length; j++) {
//             let numToRight=arr[j]
//             if (curNum<=numToRight) {
//                 isTop=false
//                 break
//             }
//         }
//         if (isTop) {
//             topNums.push(curNum)
//         }
//     }
//     console.log(topNums.join(' '));
// }
// maxNumber([14, 24, 3, 19, 15, 17])

// function equalNums(arr) {
//     let isFound=false
//     for (let i = 0; i < arr.length; i++) {
//         let sumToLeft = 0
//         let sumToRight=0

//         for (let j = 0; j < i; j++) {
//             sumToLeft+=arr[j]
//         }
//         for (let k = i+1; k < arr.length ; k++) {
//             sumToRight+=arr[k]
//         }
//         if (sumToLeft===sumToRight) {
//             console.log(i);
//             isFound = true
//             break
//         }
//     }
//     if (!isFound) {
//         console.log('no');
//     }
// }
// equalNums([1, 2])
// equalNums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
// equalNums([1, 2, 3, 3])

// function maxSeq(arr) {
//     let longestSequence=[]
//     let curSequence = [arr[0]]
//     for (let i = 1; i < arr.length; i++) {
//         let curNum = arr[i]
//         if (curNum === curSequence[0]) {
//             curSequence.push(curNum)
//             if (curSequence.length>longestSequence.length) {
//                 longestSequence=curSequence
//             }
//         }else{
//             curSequence=[curNum]
//         }
//     }
//     console.log(longestSequence.join(' '));
// }
// maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])

// function dungeonestDark(arr) {
//     const roomsString = arr[0]
//     const rooms=roomsString.split('|')
//     // console.log(rooms);
//     let coins = 0
//     let health = 100
//     let roomCount = 1
//     for (const room of rooms) {
//         // console.log(room);
//         const roomElements = room.split(' ')
//         // console.log(roomElements);
//         const text = roomElements[0]
//         const value = Number(roomElements[1])
//         if (text==='potion') {
//             let healthAdded = value
//             if (health+healthAdded>100) {
//                 healthAdded=100-health
//             }
//             health+=healthAdded
//             console.log(`You healed for ${healthAdded} hp.`);
//             console.log(`Current health: ${health} hp.`);
//             // roomCount++
//         }else if (text === 'chest') {
//             coins+=value
//             console.log(`You found ${value} coins.`);
//             // roomCount++
//         }else{
//             const monsterName= text
//             const monsterAttack = value
//             health-=monsterAttack
//             if (health>0) {
//                 console.log(`You slayed ${monsterName}.`);
//                 // roomCount++
//             }else{
//                 console.log(`You died! Killed by ${monsterName}.`);
//                 console.log(`Best room: ${roomCount}`);
//                 break
//             }
//         }
//         roomCount++
//     }
//     if (health>0) {
//         console.log(`You've made it!`);
//         console.log(`Coins: ${coins}`);
//         console.log(`Health: ${health}`);
//     }
// }
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
// // dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])

// function magicSum(arr,mSum) {
//     for (let i = 0; i <= arr.length; i++) {
//         const num1=arr[i]
//         for (let j = i+1; j <= arr.length; j++) {
//             const num2=arr[j]
//             if (num1+num2===mSum) {
//                 console.log(`${num1} ${num2}`);
//             }
//         }
//     }
// }
// magicSum([1, 7, 6, 2, 19, 23],8)
// magicSum([14, 20, 60, 13, 7, 19, 8],27)
// magicSum([1, 2, 3, 4, 5, 6],6)