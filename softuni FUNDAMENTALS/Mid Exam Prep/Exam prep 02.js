// function reception(arr) {
//     const firstEmployee=Number(arr.shift())
//     const secondEmployee=Number(arr.shift())
//     const thirdEmployee=Number(arr.shift())
//     const combinedEff=firstEmployee+secondEmployee+thirdEmployee
//     let students = Number(arr.shift())
//     let time = 1
//     while (students>0) {
//         if (time%4===0&&time>1) {
//             time++
//             continue
//         }
//         time++
//         students-=combinedEff
//     }
//     console.log(`Time needed: ${time-1}h.`); // smh tova ba4ka
// }
// reception(['5','6','4','20'])
// reception(['1','2','3','45'])
// reception(['3','2','5','40'])


// function arrayModifier(arr) {
//     let array=arr.shift().split(' ').map(Number)
//     for (const command of arr) {
//         const tokens=command.split(' ')
//         const tokenComand=tokens.shift()
//         const index1=Number(tokens.shift())
//         const index2=Number(tokens.shift())
//         switch (tokenComand) {
//             case 'swap':
//                 if (index1<index2) {
//                     const swapSecond=array.splice(index2,1)
//                     const swapFirst=array.splice(index1,1)
//                     array.splice(index1,0,swapSecond[0])
//                     array.splice(index2,0,swapFirst[0])
//                 }else{
//                     const swapFirst=array.splice(index1,1)
//                     const swapSecond=array.splice(index2,1)
//                     array.splice(index2,0,swapFirst[0])
//                     array.splice(index1,0,swapSecond[0])
//                 }
//                 break;
//             case 'multiply':
//                 array[index1]=array[index1]*array[index2]
//                 break
//             case 'decrease':
//                 array=array.map(a=>a-1)
//                 break
//         }
//     }
//     console.log(array.join(', '));
// }
// arrayModifier([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',  
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'])
// arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'])