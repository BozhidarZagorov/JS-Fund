//  function train(arr) {
//     let wagons=arr.shift().split(' ').map(Number)
//     // let wagons = wagonsStr.split(' ')
//     // // console.log(wagons);
//     // let wagonNums = wagons.map(Number)
//     // console.log(wagons);
//     const capacity = Number(arr.shift())
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (element.includes('Add')) {
//             let tokens =element.split(' ')
//             const passengers = Number(tokens[1])
//             wagons.push(passengers)
//         }else{
//             const Newpassengers = Number(element)
//             for (let j = 0; j < wagons.length; j++) {
//                 if (wagons[j]+Newpassengers<=capacity) {
//                     wagons[j]+=Newpassengers
//                     break
//                 }
//             }
//         }
//     }
//     console.log(wagons.join(' '));
//  }
//  train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])
//  train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6'])

// function distinctArray(arr) {
//     let uniqueNums = []

//     for (const num of arr) {
//         if (!uniqueNums.includes(num)) {
//             uniqueNums.push(num)
//         }
//     }
//     console.log(uniqueNums.join(' '));
// }
// distinctArray([1, 2, 3, 4])
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])


// function houseParty(arr) {
//     let guests = []
//     for (const command of arr) {
//         let tokens = command.split(' ')
//         const name = tokens.shift()

//         if (tokens.includes('not')) {
//             const nameIdx=guests.indexOf(name)
//             if (nameIdx!==-1) {
//                 guests.splice(nameIdx,1)
//             }else{
//                 console.log(`${name} is not in the list!`);
//             }
//         }else{
//             if (guests.includes(name)) {
//                 console.log(`${name} is already in the list!`);
//             }else{
//                 guests.push(name)
//             }
//         }
//     }
//     console.log(guests.join('\n'));
// }
// houseParty(['Allie is going!','George is going!','John is not going!','George is not going!'])
// houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!'])

// function sorting(arr) {
//     const sortedArr =arr.sort((a,b)=>b - a)
//     let resultArr=[]

//     while (sortedArr.length>0) {
//         const firstElement=sortedArr.shift()
//         resultArr.push(firstElement)
//         if (sortedArr.length>0) {
//             const secondElement=sortedArr.pop()
//             resultArr.push(secondElement)
//         }   
//     }
//     console.log(resultArr.join(' '));
// }
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])


// function sortArr2Criteria(arr) {
//     const sortedArr=arr.sort((a,b)=>a.length - b.length || a.localeCompare(b))
//     console.log(sortedArr.join('\n'));
// }
// sortArr2Criteria(['alpha','beta','gamma'])
// sortArr2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])


// function gladiatorInv(arr) {
//     let inv = arr.shift().split(' ')

//     for (const command of arr) {
//         let tokens = command.split(' ')
//        //    const [action,equipment] = tokens           
//         const action  = tokens.shift()
//         const equipment = tokens.shift()

//         if (action === 'Buy') {
//             if (!inv.includes(equipment)) {
//                 inv.push(equipment)
//             }
//         }else if (action === 'Trash') {
//             const equipmentIdx=inv.indexOf(equipment)
//             if (equipmentIdx!==-1) {
//                 inv.splice(equipmentIdx,1)
//             }
//         }else if (action === 'Repair') {
//             const equipmentIdx=inv.indexOf(equipment)

//             if (equipmentIdx!==-1) {
//                 inv.splice(equipmentIdx,1)
//                 inv.push(equipment)
//             }
//         }else{
//             let equipmentTokens=equipment.split('-')
//             const oldEquipment = equipmentTokens.shift()
//             const upgrade = equipmentTokens.shift()

//             const oldEquipmentIdx=inv.indexOf(oldEquipment)
//             if (oldEquipmentIdx!==-1) {
//                 inv.splice(oldEquipmentIdx+1, 0, `${oldEquipment}:${upgrade}`)   
//             }
//         }
//     }
//     console.log(inv.join(' '));
// }
// // gladiatorInv(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel'])
// gladiatorInv(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V'])

// function arrManipulator(nums,commands) {
//     for (const command of commands) {
//         let tokens = command.split(' ')
//         const action = tokens.shift()

//         if (action === 'add') {
//             const index = Number(tokens.shift())
//             const element = Number(tokens.shift())

//             nums.splice(index, 0, element)
//         }else if (action==='addMany') {
//             let index = Number(tokens.shift())
            
//             for (let element of tokens) {
//                 element = Number(element)
//                 nums.splice(index, 0, element)
//                 index++
//             }
//         }else if (action === 'contains') {
//             const element = Number(tokens.shift())
            
//             const elementIdx=nums.indexOf(element)
//             console.log(elementIdx);
//         }else if (action === 'remove') {
//             const index = Number(tokens.shift())
//             nums.splice(index,1)
//         }else  if (action === 'shift') {
//             const rotations = Number(tokens.shift())
//             for (let rotation = 1; rotation <= rotations; rotation++) {
//                 const firstElement=nums.shift()
//                 nums.push(firstElement)
                
//             }
//         }else if (action === 'sumPairs') {
//             let resultArr=[]

//             for (let i = 0; i < nums.length; i+=2) {
//                 const curNum = nums[i]
//                 const nextNum = nums[i+1]
                
//                 if (nextNum===undefined) {
//                     resultArr.push(curNum)
//                 }else{
//                     resultArr.push(curNum+nextNum)
//                 }
//             }
//             nums=resultArr
//         }else{
//             console.log(`[ ${nums.join(', ')} ]`) ;
//         }
//     }
// }
// arrManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print'])
// arrManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3','shift 1', 'print'])