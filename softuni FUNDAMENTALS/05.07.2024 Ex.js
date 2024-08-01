// function minerTask(arr) {
//     const resourceQuantities = {}

//     for (let i = 0; i < arr.length; i+=2) {
//         const resource = arr[i];
//         const quantity = Number(arr[i+1])

//         if (resourceQuantities.hasOwnProperty(resource)) {
//             resourceQuantities[resource]+=quantity
//         }else{
//             resourceQuantities[resource]=quantity
//         }

//         // console.log(resource);
//         // console.log(quantity);
//         // console.log(`-----`);
//     }
//     // console.log(resourceQuantities);
//     const resourceEntries = Object.entries(resourceQuantities)
//     // console.log(resourceEntries);
//     for (const [resource,quantity] of resourceEntries) {
//         console.log(`${resource} -> ${quantity}`);
//     }
// }
// minerTask([
//     'Gold','155',
//     'Silver','10',
//     'Copper','17'])
// minerTask([
//     'gold','155',
//     'silver','10',
//     'copper','17',
//     'gold','15'])


// function wordsTracker(arr) {
//     const targetWords = arr.shift().split(' ')
//     const wordOccurances={}

//     for (const word of targetWords) {
//         wordOccurances[word]=0
//     }
//     for (const word of arr) {
//         if (word in wordOccurances) {
//             wordOccurances[word]++
//         }
//     }
//     const wordEntries = Object.entries(wordOccurances)
//     wordEntries.sort((a,b)=>b[1]-a[1])
//     for (const [word,occurrences] of wordEntries) {
//         console.log(`${word} - ${occurrences}`);
//     }
// }
// wordsTracker([
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])

// wordsTracker([
//     'is the', 
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])

// function companyEmps(arr) {
//     const companyEmployees = {}

//     for (const emplyeeData of arr) {
//         const [company,eployeeId] = emplyeeData.split(' -> ')

//         if (company in companyEmployees) {

//             if (!companyEmployees[company].includes(eployeeId)) {
//                 companyEmployees[company].push(eployeeId)
//             }
//         }else{
//             companyEmployees[company]=[eployeeId]
//         }
//     }
//     const companyEntire = Object.entries(companyEmployees)
//     companyEntire.sort((a,b)=>a[0].localeCompare(b[0]))

//     for (const [name,employeesArr] of companyEntire) {
//         console.log(name);
//         for (const employeeId of employeesArr) {
//             console.log(`-- ${employeeId}`);
//         }
//     }
// }
// companyEmps(['SoftUni -> AA12345',
// 'SoftUni -> BB12345',
// 'Microsoft -> CC12345',
// 'HP -> BB12345'])

// function legendaryFarming(str) {
//     const keyMaterialQuantities={shards:0,fragments:0, motes:0}
//     const junkMaterialQuantities= {}
//     const legedaries = {shards:'Shadowmourne',fragments:'Valanyr',motes:'Dragonwrath'}

//     const materialsInfo=str.split(' ')
    
//     for (let i = 0; i < materialsInfo.length; i+=2) {
//         const quantity = Number(materialsInfo[i])
//         const material = materialsInfo[i+1].toLowerCase()

//         if (material in keyMaterialQuantities) {
//             keyMaterialQuantities[material]+=quantity

//             if (keyMaterialQuantities[material]>=250) {
//                 keyMaterialQuantities[material]-=250
//                 const legendaryWon = legedaries[material]
//                 console.log(`${legendaryWon} obtained!`);
//                 break
//             }
//         }else if (material in junkMaterialQuantities) {
//             junkMaterialQuantities[material]+=quantity
//         }else{
//             junkMaterialQuantities[material]=quantity
//         }
//     }

//     const keyMaterialEntries=Object.entries(keyMaterialQuantities)
//     keyMaterialEntries.sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0]))
//     for (const [material,value] of keyMaterialEntries) {
//         console.log(`${material}: ${value}`);
//     }

//     const junkMaterialEntries=Object.entries(junkMaterialQuantities)
//     junkMaterialEntries.sort((a,b)=>a[0].localeCompare(b[0]))
//     for (const [junk,quantity] of junkMaterialEntries) {
//         console.log(`${junk}: ${quantity}`);
//     }
// }
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')


// function oddOccurences(str) {
//     const wordOccurences = new Map()
//     const words=str.split(' ').map(word =>word.toLowerCase())   
//     // console.log(words);
//     for (const word of words) {
//         if (wordOccurences.has(word)) {
//             const currentOccurences = wordOccurences.get(word)
//             wordOccurences.set(word,currentOccurences+1)
//         }else{
//             wordOccurences.set(word,1)
//         }
//     }
//     // console.log(wordOccurences)
//     const wordEntries=wordOccurences.entries()
//     const validWords=[]
//     for (const [word,occurrences] of wordEntries) {
//         if (occurrences%2!==0) {
//             validWords.push(word)
//         }
//     }
//     console.log(validWords.join(' '));

// }
// oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


// function picolo(arr) {
//     const cars = new Set()

//     for (const carInfo of arr) {
//         const [command,carNumber]=carInfo.split(', ')
//         if (command==='IN') {
//             cars.add(carNumber)
//         }else{
//             cars.delete(carNumber)
//         }
//     }
//     const carsArr=Array.from(cars)  //tova e vmesto [...cars]
// //    console.log(carsArr);         //ot gorniqt red go napravihme ot set na masiv
//     carsArr.sort((a,b)=>a.localeCompare(b))
//     if (carsArr.length===0) {
//         console.log(`Parking Lot is Empty`);
//     }else{
//         console.log(carsArr.join(`\n`));
//     }
// }
// picolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'])



// function cardGame(arr) {
//     //cards power
//     const values = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14}
//     const types = {'S': 4, 'H': 3, 'D': 2, 'C': 1}
//     //creating lib for the players and hands
//     const players = {};
//     const hands = {};
//     //allocating cards to players
//     for (const elements of arr) {
//         const [player, cards] = elements.split(": ");
//         const hand = cards.split(", ");
 
//         if (!players.hasOwnProperty(player)) {
//             players[player] = 0;
//             hands[player] = new Set();
//         }
 
//         for (const card of hand) {
//             if (!hands[player].has(card)) {
//                 hands[player].add(card);

//                 const power = card.slice(0, -1);
//                 const type = card.slice(-1);
//                 const powers = values[power];
//                 const value = types[type];

//                 players[player] += powers * value;
//             }
//         }
//     }
//     //output
//     const entries = Object.entries(players)
//     for (const [name, value] of entries) {
//         console.log(`${name}: ${value}`);
//     }
// }
// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
//     ])



// function party (arr){
//     let currGuest = arr.shift()
//     const VIPs = []
//     const regulars = []
//     //allocate
//     while (currGuest != "PARTY"){
//         let isVIP = isNaN(currGuest[0])
//         if (isVIP){
//             regulars.push(currGuest)
//         }
//         else {
//             VIPs.push(currGuest)
//         }
//         currGuest = arr.shift()
//     }

//     const Guests = VIPs.concat(regulars)
    
//     for (guest of arr){
//         Guests.splice(Guests.indexOf(guest),1)
//     }
//     //output
//     console.log(Guests.length)
//     Guests.forEach(guest => {console.log(guest)})
// }
// party(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'])
