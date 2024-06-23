// function movingTarget(arr) {
//     let targets = arr.shift().split(' ').map(Number)

//     for (const elements of arr) {
//         if (elements==='End') {
//             break
//         }
//         const tokens = elements.split(' ')
//         const command = tokens[0]
//         const tokenIndex=Number(tokens[1])
//         const tokenValue = Number(tokens[2])
        
//         if (command==='Shoot') {
//             if (targets[tokenIndex]) {
//                 targets[tokenIndex]-=tokenValue
//                 if (targets[tokenIndex]<=0) {
//                     targets.splice(tokenIndex,1)
//                 }
//             }
//         }else if(command==='Add'){
//             if (targets[tokenIndex]) {
//                 targets.splice(tokenIndex,0,tokenValue)
//             }else{
//                 console.log(`Invalid placement!`);
//             }
//         }else if (command===`Strike`) {
//             if (targets[tokenIndex]) {
//                 let idxLeft = tokenIndex-tokenValue
//                 let idxRight = tokenIndex+tokenValue
//                 if (targets.length<idxRight || idxLeft<0) {
//                     console.log("Strike missed!");
//                 }else{
//                     targets.splice(tokenIndex+1,tokenValue)
//                     targets.splice(tokenIndex,1)
//                     targets.splice(tokenIndex-1,tokenValue)
//                 }
//             }
//         }
//     }
//     console.log(targets.join('|'));
// }
// movingTarget(["52 74 23 44 96 110",
//             "Shoot 5 10",
//             "Shoot 1 80",
//             "Strike 2 1",
//             "Add 22 3",
//             "End"])

// movingTarget(["1 2 3 4 5",
//             "Strike 0 1",
//             "End"])
    

function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number)

    for (const element of arr) {
        if (element==='End') {
            break
        }
        const indexes = Number(element)

        if (targets[indexes]){        
            const modifier = targets[indexes]
            targets[indexes]=-1
            for (let i = 0; i <= targets.length; i++) {
                if (targets[i]>modifier) {
                    targets[i]-=modifier
                    if (targets[i]<0) {
                        targets[i]=-1
                    }
                }else if (targets[i]<=modifier && targets[i]!==-1) {
                    targets[i]+=modifier
                }
                
            }
        }
    }
    const downed = targets.filter(x=> x===-1)
    console.log(`Shot targets: ${downed.length} -> ${targets.join(' ')}`);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
    
    //ddz kyde 4upi 90/100