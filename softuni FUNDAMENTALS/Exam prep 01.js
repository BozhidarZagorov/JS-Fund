// function theLift(arr) {
//     let people=Number(arr.shift())
//     const lift=arr.shift().split(' ').map(Number)
    
//     for (let i = 0; i < lift.length; i++) {
//         if (people<=0) {
//             break
//         }
//         if (lift[i]===4) {
//             continue
//         }else{
//             let canGet=4-lift[i]
//             if (people-canGet>=0) {
//                 lift[i]=4
//                 people-=canGet
//             }else if(people+lift[i]<=4){
//                 lift[i]+=people
//                 people-=people
//             }
//         }
//     }
//     if (people>0) {
//         console.log(`There isn't enough space! ${people} people in a queue!`);
//         console.log(lift.join(' '));

//     }else{
//         if (lift[lift.length-1]<4) {
//             console.log(`The lift has empty spots!`);
//             console.log(lift.join(' '));
//         }else console.log(lift.join(' '));
//     }
// }
// theLift([
//     "1",
//     "4 4 4 4 3"
//    ])
// theLift([
//     "20",
//     "0 2 0"
//    ])




// function memoryGame(arr) {
//     const sequence = arr.shift().split(' ')
//     let moves = 0
//     for (const indexes of arr) {
//         if (indexes==='end') {
//             break
//         }
//         if (sequence.length===0) {
//             break
//         }
//         moves++
//         const indexArr = indexes.split(' ').map(Number)
//         const index1=indexArr.shift()
//         const index2=indexArr.shift()
//         if (!sequence[index1] || !sequence[index2] || index1===index2) {
//             console.log(`Invalid input! Adding additional elements to the board`);
//             const seqHalfLen=(sequence.length)/2
//             sequence.splice(seqHalfLen,0,`${-moves}a`,`${-moves}a`)
//         }else{
//             if (sequence[index1]===sequence[index2]) {
//                 console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
//                     if (index1<index2) {
//                     sequence.splice(index2,1)
//                     sequence.splice(index1,1)
//                     }else{
//                     sequence.splice(index1,1)
//                     sequence.splice(index2,1)
//                      }
//             }else console.log(`Try again!`);
//         }
//     }
//     if (sequence.length!==0) {
//         console.log(`Sorry you lose :(`);
//         console.log(sequence.join(' '));
//     }else{
//         console.log(`You have won in ${moves} turns!`);
//     }
// }
// memoryGame( [
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"])
// memoryGame([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ])
// memoryGame([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ])