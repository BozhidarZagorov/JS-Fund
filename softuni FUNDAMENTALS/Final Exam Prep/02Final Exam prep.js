function plantDiscovery(arr) {
    let allPlants = {}
    const plantsNumber=Number(arr.shift())
    //put plants in {allPlants}
    for (let i = 0; i < plantsNumber; i++) {
        const elements = arr.shift().split('<->')
        const plant=elements[0]
        let rarity=Number(elements[1])
        if (plant in allPlants) {
            
        }else{
            allPlants[plant]={rarity:rarity,rating:Number(),timesRated:Number()}
        }
        
    }
    // console.log(allPlants);
    let tokens=arr.shift().split(': ')
    let command=tokens[0]
    let elementsPlants=tokens[1]
    //traverse commands
    while (command!=='Exhibition') {
        if (command==='Rate') {
            const rateTokens=elementsPlants.split(' - ')
            const ratePlant=rateTokens[0]
            const rate=Number(rateTokens[1])
            if (ratePlant in allPlants) {
                allPlants[ratePlant].rating+=rate
                allPlants[ratePlant].timesRated+=1
            }else{
                console.log('error');
            }
        }else if (command==='Update') {
            const updateTokens=elementsPlants.split(' - ')
            const plantToUpdate=updateTokens[0]
            const rarityUpdate=Number(updateTokens[1])
            if (plantToUpdate in allPlants) {
                allPlants[plantToUpdate].rarity=rarityUpdate
            }else{
                console.log('error');
            }
        }else if (command==='Reset') {
            const resetPlant=elementsPlants
            if (resetPlant in allPlants) {
                allPlants[resetPlant].rating=0
                allPlants[resetPlant].timesRated=0
            }else{
                console.log('error');
                
            }

        }        
        tokens=arr.shift().split(': ')
        command=tokens[0]
        elementsPlants=tokens[1]
    }
    //output
    let plantsEntry=Object.entries(allPlants)
    
    console.log('Plants for the exhibition:');
    for (const [plant,rarity] of plantsEntry) {
        if (rarity.rating===0||rarity.timesRated===0) {
            const averageRating = 0   
            console.log(`- ${plant}; Rarity: ${rarity.rarity}; Rating: ${averageRating.toFixed(2)}`);
        }else{
            const averageRating = rarity.rating/rarity.timesRated
            console.log(`- ${plant}; Rarity: ${rarity.rarity}; Rating: ${averageRating.toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
    