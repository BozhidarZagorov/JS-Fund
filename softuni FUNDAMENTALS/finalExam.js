// pass regular_final

// zad 3

// function wildZoo(arr){
//     const allAnimals={};
//     const areas={};
//     while(arr.length>0){
//         let tokens=arr.shift().split(': ');
//         let command=tokens[0];
//         //checker
//         if(command==='EndDay'){
//             break;
//         }
//         let elements=tokens[1].split('-');
//         //Add animals
//         if(command==='Add'){
//             let animal=elements[0];
//             let foodNeeded=Number(elements[1]);
//             let area=elements[2];
//             if(animal in allAnimals){
//                 allAnimals[animal].foodNeeded+=foodNeeded;
//             }else{
//                 allAnimals[animal]={ foodNeeded: foodNeeded, area: area };
//             }
//         //feed animals
//         }else if(command==='Feed'){
//             let animal=elements[0];
//             let food =Number(elements[1]);
//             if (animal in allAnimals){
//                 if (allAnimals[animal].foodNeeded-food <= 0){
//                     console.log(`${animal} was successfully fed`);
//                     delete allAnimals[animal];
//                 }else{
//                     allAnimals[animal].foodNeeded-=food;
//                 }
//             }
//         }
//     }
//     // Output
//     console.log('Animals:');
//     let animalEntry = Object.entries(allAnimals)
//     for(const [animal,animalTokens] of animalEntry){
//         console.log(` ${animal} -> ${animalTokens.foodNeeded}g`);
//         if(animalTokens.area in areas){
//             areas[animalTokens.area].times+=1
//         }else{
//             areas[animalTokens.area] = {times:1}
//         }
//     }
//     console.log('Areas with hungry animals:');
//     let areaEntry=Object.entries(areas)
//     for(const [area, areaInfo] of areaEntry){
//         if(areaInfo.times>0){
//             console.log(`${area}: ${areaInfo.times}`);
//         }
//     }
// }
// wildZoo(["Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"])

// wildZoo(["Add: Jamie-600-WaterfallArea",
//     "Add: Maya-6570-WaterfallArea",
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Bobbie-6570-WaterfallArea",
//     "Feed: Jamie-2000",
//     "Feed: Adam-2000",
//     "Feed: Adam-2500",
//     "EndDay"])
    

// wildZoo(["Add: Bonie-3490-RiverArea",
//     "Add: Sam-5430-DeepWoodsArea",
//     "Add: Bonie-200-RiverArea",
//     "Add: Maya-4560-ByTheCreek",
//     "Feed: Maya-2390",
//     "Feed: Bonie-3500",
//     "Feed: Johny-3400",
//     "Feed: Sam-5500",
//     "EndDay"])
    


// function msgDecrypt(arr) {
//     const len = Number(arr.shift())
//     const pattern = /^(?<msg>\$[A-Z][a-z]{2,}\$: |\%[A-Z][a-z]{2,}\%: )(\[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|)$/;

//     //reading arr
//     for (let i = 0; i < len; i++){
//         let cryptMSG = arr[i];
//         const executer = pattern.exec(cryptMSG);//truty|falsy
//         //checker

//         if (executer){
//             const tag = executer.groups.msg.slice(1, -3) //negative num removes from the back //remove elements
//             const numbers = cryptMSG.match(/\d+/g).map(Number)
//             let decryptedMSG=""
//             //reading arr of nums

//             for (let i = 0; i < numbers.length; i++){
//                 const element = numbers[i]
//                 //from ASCII to char
//                 decryptedMSG+=String.fromCharCode(element)
//             }

//             //output
//             console.log(`${tag}: ${decryptedMSG}`)
//         }else {
//             console.log("Valid message not found!")
//         }
//     }
// }
// msgDecrypt(["4",
//     "$Request$: [73]|[115]|[105]|",
//     "%Taggy$: [73]|[73]|[73]|",
//     "%Taggy%: [118]|[97]|[108]|",
//     "$Request$: [73]|[115]|[105]|[32]|[75]|"]);
// msgDecrypt(["3",
//     "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
//     "$tAGged$: [97][97][97]|",
//     "$Request$: [73]|[115]|[105]|true"])

        
// function passValidator(arr) {
//     let pass = arr.shift()
//     const validationPatternChars=/^[a-zA-Z0-9_]$/ //test len chars symbol'_' and nums
//     //take command
//     let tokens=arr.shift().split(' ')
//     let command=tokens[0]

//     while(command!=='Complete') {

//         if (command === "Make") {

//             const toLowerOrUpper = tokens[1]
//             const indexToChange = Number(tokens[2])

//             if (indexToChange < pass.length && indexToChange >= 0) {
//                 const charToChange = pass[indexToChange]

//                 if (toLowerOrUpper === "Upper") {

//                     const left= pass.slice(0, indexToChange)
//                     const change=charToChange.toUpperCase()
//                     const right=pass.slice(indexToChange + 1)

//                     pass=left+change+right
//                 } else if (toLowerOrUpper === "Lower") {

//                     const left=pass.slice(0, indexToChange)
//                     const change=charToChange.toLowerCase()
//                     const right=pass.slice(indexToChange + 1)

//                     pass=left+change+right
//                 }
//                 console.log(pass)
//             }
//         } else if (command === "Insert") {

//             const insertIndex = Number(tokens[1])
//             const charToInsert = tokens[2]
//             const isValidChar=validationPatternChars.test(charToInsert)

//             if (isValidChar && insertIndex <= pass.length && insertIndex >= 0) {

//                 const left=pass.slice(0, insertIndex)
//                 const right=pass.slice(insertIndex)

//                 pass=left+charToInsert+right
//                 console.log(pass)
//             }
//         } else if (command === "Replace") {

//             const charToReplace = tokens[1]
//             const ASCIIvalue = Number(tokens[2])
//             if (pass.includes(charToReplace)) {

//                 const oldCharValue=charToReplace.charCodeAt()
//                 const newValue=oldCharValue+ASCIIvalue
//                 const newChar = String.fromCharCode(newValue)

//                 pass = pass.split(charToReplace).join(newChar)
//                 console.log(pass)
//             }
//         } else if (command === "Validation") {
//             if (pass.length < 8) {
//                 console.log("Password must be at least 8 characters long!")
//             }
//             //test returns true|false
//             if (!/^[a-zA-Z0-9_]+$/.test(pass)) {
//                 console.log("Password must consist only of letters, digits and _!")
//             }
//             if (!/[A-Z]/.test(pass)) {
//                 console.log("Password must consist at least one uppercase letter!")
//             }
//             if (!/[a-z]/.test(pass)) {
//                 console.log("Password must consist at least one lowercase letter!")
//             }
//             if (!/[0-9]/.test(pass)) {
//                 console.log("Password must consist at least one digit!")
//             }
//         }
//         //take new commands
//         tokens=arr.shift().split(' ')
//         command=tokens[0]
//     }
// }
// passValidator(['invalidpassword*',
//     'Add 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete']);
// passValidator(['123456789',
//     'Insert 3 R',
//     'Replace 5 15',
//     'Validation',
//     'Make Lower 3',
//     'Complete'])


