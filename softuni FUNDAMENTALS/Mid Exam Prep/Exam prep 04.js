function shoppingList(arr) {
    const list = arr.shift().split('!')

    for (const element of arr) {
        if (element==='Go Shopping!') {
            break
        }
        const tokens = element.split(' ')
        const command = tokens[0]
        const item = tokens[1]

        if(command==='Urgent'){
            if (!list.includes(item)) {
                list.unshift(item)
            }

        }else if (command === `Unnecessary`) {
            if (list.includes(item)) {
                const removerIdx = list.indexOf(item)
                list.splice(removerIdx,1)
            }

        }else if (command === 'Correct') {
            const newItem = tokens[2]
            if (list.includes(item)) {
                const removeIndex = list.indexOf(item)
                list.splice(removeIndex,1,newItem)
            }

        }else if (command === 'Rearrange') {
            if (list.includes(item)) {
                const rearangeIdx=list.indexOf(item)
                const rearange=list.splice(rearangeIdx,1)
                list.push(rearange)
            }
        }
    }
    console.log(list.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

    

// function heartDelivery(arr) {
//     let hoods = arr.shift().split('@').map(Number)
//     let curr = 0

//     for (const element of arr) {

//         if (element==='Love!') {
//             console.log(`Cupid's last position was ${curr}.`);
//             break
//         }

//         const commands = element.split(' ')
//         // const jump = commands[0]
//         let len = Number(commands[1])
//         // console.log(len);

//         if (hoods.length-1<len || curr+len>hoods.length-1){
//             len=0
//             curr=0
//             if (hoods[len]>0) {
//                 hoods[len]-=2
//                 // console.log(hoods);
//                 if (hoods[len]===0) {
//                     console.log(`Place ${len} has Valentine's day.`);
//                 }
//             }else console.log(`Place ${len} already had Valentine's day.`);

//         }else{
//             curr+=len
//             if (hoods[curr]>0) {
//                 hoods[curr]-=2
//                 // console.log(hoods);
//                 if (hoods[curr]===0) {
//                     console.log(`Place ${curr} has Valentine's day.`);
//                 }
//             }else console.log(`Place ${curr} already had Valentine's day.`);

//         }
//     }

//     const failed = hoods.filter(a => a>0)
//     if (failed.length!==0) {
//         console.log(`Cupid has failed ${failed.length} places.`);
//     }else console.log("Mission was successful.");
// }
// // heartDelivery(["10@10@10@2",
// //     "Jump 1",
// //     "Jump 2",
// //     "Love!"])
// heartDelivery(["2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love!"])
        