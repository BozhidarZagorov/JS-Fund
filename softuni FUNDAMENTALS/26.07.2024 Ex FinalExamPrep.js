// function decrypt(arr) {
//     let msg = arr.shift()
//     let command=arr.shift()

//     while (command!== 'Decode') {
//         const tokens =command.split('|')
//         const action = tokens.shift()

//         if (action==='Move') {

//             const letterCount = Number(tokens.shift())
//             const lettersToMove = msg.substring(0,letterCount)
//             msg=msg.replace(lettersToMove,'')
//             msg+=lettersToMove

//         }else if (action==='Insert') {
            
//             let index = Number(tokens.shift())
//             let value = tokens.shift()
//             msg=msg.substring(0,index)+value+msg.substring(index)

//         }else if (action === 'ChangeAll') {

//             let substring= tokens.shift()
//             let replacement= tokens.shift()

//             while (msg.includes(substring)) {

//                 msg=msg.replace(substring,replacement)
//             }
//         }
//         // console.log(msg);
//         command=arr.shift()
//     }
//     console.log(`The decrypted message is: ${msg}`);

// }
// decrypt([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
//   ])




// function barcodes(arr) {
//     const pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<exp_date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g
//     let str=arr.shift()
//     let totalCalories = 0
//     let match = pattern.exec(str)
//     // console.log(match);
//     const items = []
//     while (match) {
//         const itemName=match.groups.item
//         const expirationDate=match.groups.exp_date
//         const calories = Number(match.groups.cals)

//         totalCalories+=calories
//         items.push(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`);
        

        
//         match=pattern.exec(str)
//     }
//     let days = Math.floor(totalCalories/2000)
//     console.log(`You have food to last you for: ${days} days!`);
//     console.log(items.join('\n'));

// }
// barcodes(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])





function pirates(arr) {
    let citiesData={}

    let command=arr.shift()
    while (command!=='Sail') {
        let tokens=command.split('||')
        let cityName = tokens.shift()
        let cityPopulation=Number(tokens.shift())
        let cityGold = Number(tokens.shift())

        if (cityName in citiesData) {
            citiesData[cityName].population+=cityPopulation
            citiesData[cityName].gold+=cityGold

        }else {
            citiesData[cityName]={population: cityPopulation, gold: cityGold}
        }

        command=arr.shift()
    }
    // console.log(citiesData);

    command=arr.shift()
    while (command!=='End') {
        const tokens = command.split('=>')
        const action=tokens.shift()
        const city = tokens.shift()

        if (action==='Plunder') {
            let peopleKilled = Number(tokens.shift())
            let goldStolen = Number(tokens.shift())

            citiesData[city].population-=peopleKilled
            citiesData[city].gold-=goldStolen
            console.log(`${city} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
            if (citiesData[city].population<=0 || citiesData[city].gold<=0) {
                console.log(`${city} has been wiped off the map!`);
                delete citiesData[city]
            }
        }else if (action==='Prosper') {
            let goldAcquired = Number(tokens.shift())
            if (goldAcquired<0) {
                console.log(`Gold added cannot be a negative number!`);
            }else{
                citiesData[city].gold+=goldAcquired
                console.log(`${goldAcquired} gold added to the city treasury. ${city} now has ${citiesData[city].gold} gold.`);
            }
        }

        command=arr.shift()
    }
    // console.log(citiesData);
    let cityEntries=Object.entries(citiesData)
    // console.log(cityEntries);
    if (cityEntries.length===0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }else{
        console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);
    }


    for (const [cityName,cityStats] of cityEntries) {
        console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
    }

}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    