// function computerStore(arr) {
//     let PriceWithoutTax=0
//     let tax = 0
//     let totalPrice = 0
//     let command = arr.shift()

//     while (command!=='special' && command!=='regular') {
//         const partPice = Number(command)
//         if (partPice>0) {
//             PriceWithoutTax+=partPice
//         }else console.log(`Invalid price!`);

//         command = arr.shift()
//     }

//     tax=PriceWithoutTax*0.2
//     totalPrice=tax+PriceWithoutTax
    
//     if (command==='special') {
//         totalPrice=totalPrice*0.9
//     }
//     if (totalPrice===0) {
//         console.log(`Invalid order!`);
//     }else{
//         console.log(`Congratulations you've just bought a new computer!`);
//         console.log(`Price without taxes: ${PriceWithoutTax.toFixed(2)}$`);
//         console.log(`Taxes: ${tax.toFixed(2)}$`);
//         console.log(`-----------`);
//         console.log(`Total price: ${totalPrice.toFixed(2)}$`);
//     }

// }
// computerStore(['1050','200','450','2','18.50','16.86','special'])
// computerStore([ '1023','15','-20','-5.50','450','20','17.66','19.30','regular'])
// computerStore(['regular'])

// // "Congratulations you've just bought a new computer!
// // Price without taxes: {total price without taxes}$
// // Taxes: {total amount of taxes}$
// // -----------
// // Total price: {total price with taxes}$"



// function treasureHunt(arr) {
//     let items = arr.shift().split('|')
//     let command = arr.shift()

//     while (command!== `Yohoho!`){
//      const tokens = command.split(' ')
//      const action =tokens.shift()

//      switch (action) {
//         case 'Loot':
//             const newItems = tokens

//             for (const newItem of newItems) {
//                 if (!items.includes(newItem)) {
//                 items.unshift(newItem)   
//                 }
//             }
//             break;
//         case 'Drop':
//             const index = Number(tokens.shift())
//             if (index >=0 && index<items.length) {
//                 const deletedItem =items.splice(index,1)[0]
//                 items.push(deletedItem)
//             }
//             break
//         case 'Steal':
//             const countToDelete = Number(tokens.shift())
//             const stolenItems=items.splice(-countToDelete)
//             console.log(stolenItems.join(', '));
//             break
//      }

//         command=arr.shift()
//     }
//     let gainSum=0
//     for (const item of items) {
//         gainSum+=item.length
//     }
//     const averageGain=gainSum/items.length
//     if (items.length===0) {
//         console.log(`Failed treasure hunt.`);
//     }else{
//         console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
//     }
// }
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//             "Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"])
// treasureHunt(["Diamonds|Silver|Shotgun|Gold", 
//             "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])


/////////////////////////////////////////////////


// function treasureHunt(arr) {
//     function collectLoot(curItems,newItems) {
//         for (const newItem of newItems) {
//             if (!items.includes(newItem)) {
//             items.unshift(newItem)   
//             }
//             }
//             // return curItems
//     }
//     function dropItem(curItems,index) {
//         if (index >=0 && index<items.length) {
//             const deletedItem =items.splice(index,1)[0]
//             items.push(deletedItem)
//         }
//         // return curItems
//     }
//     function stealItems(curItems,countToDelete) {
//         const stolenItems=items.splice(-countToDelete)
//         console.log(stolenItems.join(', '));
//         // return curItems                                  //raboti dori i bez return zashtoto v js funkciite direktno rabotqt vyrhu vytreshnata funkciq
//     }

//     let items = arr.shift().split('|')
//     let command = arr.shift()

//     while (command!== `Yohoho!`){
//      const tokens = command.split(' ')
//      const action =tokens.shift()

//      switch (action) {
//         case 'Loot':
//             const newItems = tokens
//             collectLoot(items,newItems)
//             break;

//         case 'Drop':
//             const index = Number(tokens.shift())
//             dropItem(items,index)
//             break

//         case 'Steal':
//             const countToDelete = Number(tokens.shift())
//             stealItems(items,countToDelete)
//             break
//      }

//         command=arr.shift()
//     }
//     let gainSum=0
//     for (const item of items) {
//         gainSum+=item.length
//     }
//     const averageGain=gainSum/items.length
//     if (items.length===0) {
//         console.log(`Failed treasure hunt.`);
//     }else{
//         console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
//     }
// }
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//             "Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"])
// treasureHunt(["Diamonds|Silver|Shotgun|Gold", 
//             "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])


// let arr = [4,6,8,2,-3,0]
// let mappedArr = arr.map(num=>num*2)             //minava prez masiva i pravi neshto
// console.log(mappedArr);

// let filteredArr = arr.filter(num=>num%2===0)    //proverqva prez masiva i ako vyrne true go zapazva v masiva ako ne ne go dobavq
// console.log(filteredArr);



// function nums(arr) {
//     let numsArr = arr.split(' ').map(num=>Number(num)) //.map(Number) pravi syshtoto
//     let numSum=0
//     for (const num of numsArr) {
//         numSum+=num
//     }
//     const avg=numSum/numsArr.length
//     const filteredNums = numsArr.filter(num=>num>avg)
//     if (filteredNums.length===0) {
//         console.log(`No`);
//     }else{
//         const sortedNums = filteredNums.sort((a,b)=> b - a)             //namalqvasht red
//         const top5Nums = sortedNums.slice(0,5)
//         console.log(top5Nums.join(' '));
//     } 
// }
// nums('10 20 30 40 50')
// nums(`5 2 3 4 -10 30 40 50 20 50 60 60 51`)
// nums('1')
// nums('-1 -2 -3 -4 -5 -6')




// function bonusScoringSys(arr) {
//     const studentCount = Number(arr.shift())
//     const totalLectureCount = Number(arr.shift())
//     const additionalBonus = Number(arr.shift())
//     let maxBonus = 0
//     let maxAttendances = 0
//     for (let curStud = 1; curStud <= studentCount; curStud++) {
//         const atendance = Number(arr.shift())
//         const totalBonus = atendance/totalLectureCount*(5+additionalBonus)
//         if (totalBonus>maxBonus) {
//             maxBonus=totalBonus
//             maxAttendances=atendance
//         }
//     }
//     console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
//     console.log(`The student has attended ${maxAttendances} lectures.`);
// }
// bonusScoringSys(['5','25', '30','12', '19', '24','16', '20'])

//   bonusScoringSys(['10', '30', '14', '8','23', '27', '28', '15','17', '25', '26', '5','18'])

