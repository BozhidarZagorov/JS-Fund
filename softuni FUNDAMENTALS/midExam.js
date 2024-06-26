// function theBiscuitFactory(arr) {
//     const biscuitsPerWorker = Number(arr.shift())
//     const workers = Number(arr.shift())
//     const compFactory =Number(arr.shift())
//     const biscuits3rdDays = biscuitsPerWorker*0.75
//     let biscuits=0

//     for (let day = 1; day <= 30; day++) {
//         if (day%3===0) {
//             biscuits+=biscuits3rdDays*workers   //vyzmojno 4upene
//             biscuits=Math.floor(biscuits)
//         }else{
//             biscuits+=biscuitsPerWorker*workers
//         }
        
//     }
//     console.log(`You have produced ${Math.floor(biscuits)} biscuits for the past month.`);
//     if (compFactory<biscuits) {
//         let proizv=biscuits-compFactory
//         let probaPercent = (proizv/compFactory)*100
//         // console.log(probaPercent);

//         // let percentage=((biscuits/compFactory)*100)-100
//         // console.log(percentage);
//         console.log(`You produce ${probaPercent.toFixed(2)} percent more biscuits.`);
//     }else{
//         let proizv2=compFactory-biscuits
//         let probaPercent2=(proizv2/compFactory)*100
//         // console.log(probaPercent2);

//         // let percentage2=(((biscuits/compFactory)*100)-100)*-1
//         console.log(`You produce ${probaPercent2.toFixed(2)} percent less biscuits.`);
//     }
    
// }
// // theBiscuitFactory([''])
// // theBiscuitFactory(["78",
// //     "8",
// //     "16000"])
// // theBiscuitFactory(["65",
// //     "12",
// //     "26000"])
// theBiscuitFactory(["163",
//     "16",
//     "67020"])

//problem pri procentite stiga s tiq ebani procenti we
// da probvam posle ot po golqmoto da izvadq po malkoto i da smetna kakva 4ast e malkoto ot cqloto moje i da stane taka




// function friendListMaintenance(arr) {
//     const list = arr.shift().split(', ')
//     let blacklistedCount= 0
//     let lostNamesCount = 0

//     for (const elements of arr) {
//         if (elements==='Report') {
//             break
//         }
//         const tokens = elements.split(' ')
//         const command = tokens[0]
//         if (command==='Blacklist') {
//             const name = tokens[1]
//             if (list.includes(name)) {
//                 const IdxName = list.indexOf(name)
//                 list[IdxName]='Blacklisted'
//                 console.log(`${name} was blacklisted.`);
//                 blacklistedCount++

//             }else console.log(`${name} was not found.`);

//         }else if (command==='Error') {
//             const idx=Number(tokens[1])
//             if (list[idx]) {
//                 if (list[idx]!=='Blacklisted'&&list[idx]!=='Lost') {
//                     const lostName = list[idx]
//                     list[idx]='Lost'
//                     console.log(`${lostName} was lost due to an error.`);
//                     lostNamesCount++
//                 }
//             }
  
//         }else if (command===`Change`) {
//             const idxNewName=Number(tokens[1])
//             const newName = tokens[2]
//             if (list[idxNewName]) {
//                 const oldName = list[idxNewName]
//                 list[idxNewName]=newName
//                 console.log(`${oldName} changed his username to ${newName}.`);
//             }
//         }



//     }
//     console.log(`Blacklisted names: ${blacklistedCount}`);
//     console.log(`Lost names: ${lostNamesCount}`);
//     console.log(list.join(' '));

// }
// friendListMaintenance(["Mike, John, Eddie",
//                         "Blacklist Mike",
//                         "Error 0",
//                         "Report"])
// friendListMaintenance(["Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"])
// friendListMaintenance(["Mike, John, Eddie, William",
//     "Blacklist Maya",
//     "Error 1",
//     "Change 4 George",
//     "Report"])
        


// function musicPlaylist(arr) {
//     let list = arr.shift().split(' ')
//     const comCount = Number(arr.shift())
//     let newList =[]
 

//     for (const element of arr) {
//         const tokens=element.split(' * ')
//         const command = tokens[0]

//         if (command === 'Add Song') {
//             const songNameAdd = tokens[1]
//             if (!list.includes(songNameAdd)) {
//                 list.push(songNameAdd)
//                 console.log(`${songNameAdd} successfully added`);
//             }
            
//         }else if (command === 'Delete Song') {
//             const delNum = Number(tokens[1])
//             if (delNum<list.length) {
//                 const deletedSongs=list.splice(0,delNum)
//                 console.log(`${deletedSongs.join(', ')} deleted`);
//             }
//         }else if (command === 'Shuffle Songs') {
//             const change1 = Number(tokens[1])
//             const change2 = Number(tokens[2])
//             if (list[change1] && list[change2]) {           //priemam 4e change 2 e vinagi po golqmo ot chage 1 ina4e trqbva da se napravi proverka
//                 const oldchange2=list.splice(change2,1)
//                 const oldChage1 = list.splice(change1,1,oldchange2[0])
//                 list.splice(change2,0,oldChage1[0])
//                 console.log(`${oldchange2} is swapped with ${oldChage1}`);
//             }
//         }else if (command==='Insert') {
//             const songInsert=tokens[1]
//             const insertIdx=Number(tokens[2])
//             if (list[insertIdx] && !list.includes(songInsert)) {
//                 list.splice(insertIdx,0,songInsert)
//                 console.log(`${songInsert} successfully inserted`);
//             }else if (insertIdx>list.length || insertIdx<0) {
//                 console.log("Index out of range");
//             }else if (list[insertIdx] && list.includes(songInsert)) {
//                 console.log("Song is already in the playlist");
//             }
//         }else if (command==='Sort') {
//             list.sort().reverse()

//         }else if (command===`Play`) {
//             console.log(`Songs to Play:`);
//             for (let i = 0; i < list.length; i++) {
//                 console.log(list[i]);
//             }
//         }

//     }
// }
// musicPlaylist(["Imagine BadGuy BohemianRhapsody BlindingLights",
//     "6",
//     "Add Song * ShapeOfYou",
//     "Delete Song * 2",
//     "Shuffle Songs * 0 * 3",
//     "Insert * RollingInTheDeep * 1",
//     "Sort",
//     "Play"])
// musicPlaylist(["BlindingLights RollingInTheDeep ShapeOfYou",
//     "7",
//     "Add Song * LetItBe",
//     "Delete Song * 1",
//     "Shuffle Songs * 1 * 2",
//     "Insert * BohemianRhapsody * 0",
//     "Add Song * BohemianRhapsody",
//     "Sort",
//     "Play"])
    