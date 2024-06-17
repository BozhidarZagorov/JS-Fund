// function guiniePig(input) {
//     let food = Number(input[0])*1000
//     let hay = Number(input[1])*1000
//     let cover = Number(input[2])*1000
//     const weight = Number(input[3])*1000
//     const coverConsumption=weight/3

//     for (let i = 1; i <= 30; i++) {
//         food-=300
//         if (i%2===0) {
//             hay-=food*0.05
//         }
//         if (i%3===0) {
//             cover-=coverConsumption
//         }
//         if (food<0 || hay<0 || cover<0) {
//             console.log("Merry must go to the pet store!");
//             return
//         }
//     }
//     food=food/1000
//     hay=hay/1000
//     cover=cover/1000
//     console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);

// }
// guiniePig([10, 5, 5.2, 1])


// function muOnline(arr) {
//     let hp=100
//     let loot = 0

//     const rooms = arr.split('|')
//     for (let i = 0; i < rooms.length; i++) {
//         const element = rooms[i].split(' ');
//         const command =element[0]
//         let value = Number(element[1])
        

//         if (command === 'potion') {
//             if (hp+value>100) {
//                 value=100-hp
//             }
//             hp+=value
//             console.log(`You healed for ${value} hp.`);
//             console.log(`Current health: ${hp} hp.`);
//         }else if (command === 'chest') {
//             loot+=value
//             console.log(`You found ${value} bitcoins.`);
//         }else{
//             hp-=value
//             if (hp<=0) {
//                 console.log(`You died! Killed by ${command}.`);
//                 console.log(`Best room: ${i+1}`);
//                 return
//             }else{
//                 console.log(`You slayed ${command}.`);
//             }
//         }
//     }
//     console.log(`You've made it!`);
//     console.log(`Bitcoins: ${loot}`);
//     console.log(`Health: ${hp}`);
// }
// muOnline(`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`)


// function manOwar(input) {
//     const pirateShip = input.shift().split(">").map(Number)
//     const warShip = input.shift().split(">").map(Number)
//     const maxHpCap=Number(input.shift())

//     const criticalHp = maxHpCap*0.2
//     for (const element of input) {
//         if(element === 'Retire'){
//             break
//         }
//         const tokens = element.split(" ")
//         // console.log(tokens);
//         const command = tokens.shift()

//        switch (command) {
//         case 'Fire':   
//             const index = Number(tokens[0])
//             const warShipDmg = Number(tokens[1])
//             if (warShip[index]) {
//                 if (warShip[index]-warShipDmg<0) {
//                     warShip[index]=0
//                 }else{
//                     warShip[index]-=warShipDmg
//                 }
//             }
//             if (warShip.includes(0)) {
//                 console.log(`You won! The enemy ship has sunken.`);
//                 return   
//             }
//             break;
//         case 'Defend':
//             const startIndex = Number(tokens[0])
//             const endIndex = Number(tokens[1])
//             const pirateShipDmg = Number(tokens[2])

//             if (pirateShip[startIndex]>=0 && pirateShip[endIndex]>=0) {
//                 for (let index = startIndex; index <= endIndex; index++) {
//                     if (pirateShip[index] - pirateShipDmg<=0) {
//                         pirateShip[index]=0
//                     }else{
//                         pirateShip[index]-=pirateShipDmg
//                     }
//                 }
//             }
//             if (pirateShip.includes(0)) {
//                 console.log(`You lost! The pirate ship has sunken.`);
//                 return
//             }
//             break
//         case 'Repair':
//             const repairIndex = Number(tokens[0])
//             const health = Number(tokens[1])
//             if (pirateShip[repairIndex]) {
//                 if (pirateShip[repairIndex]+health>maxHpCap) {
//                     pirateShip[repairIndex]=maxHpCap
//                 }else{
//                     pirateShip[repairIndex]+=health
//                 }
//             }
//             break
//         case 'Status':
//             const allSectionForRepair = pirateShip.filter(s => s <criticalHp)
//             console.log(`${allSectionForRepair.length} sections need repair.`);
//             break
//        }
//     }
//     let pirateShipStatus = 0
//     for (const ship of pirateShip) {
//         pirateShipStatus+=ship
//     }
//     let warShipStatus =0
//     for (const ship of warShip) {
//         warShipStatus+=ship
//     }
//     console.log(`Pirate ship status: ${pirateShipStatus}`);
//     console.log(`Warship status: ${warShipStatus}`);
    


// }
// manOwar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
// manOwar(["2>3>4>5>2","6>7>8>9>10>11","20","Status","Fire 2 3","Defend 0 4 11","Repair 3 18","Retire"])