function blackFlag(arr){
    const days = Number(arr.shift())
    const dailyPlunder = Number(arr.shift())
    let target = Number(arr.shift())
    const bonusPlunderDay = dailyPlunder/2

    let plunder = 0

    for (let day = 1; day <= days; day++) {
        plunder+=dailyPlunder
        if (day%3===0) {
            plunder+=bonusPlunderDay
        }
        if (day%5===0) {                                // da go imam predvid za bydeshte ima slu4ai kydeto se deli na 3 i na 5 obviosly i trqbva da sa vyv otdelni if-ove
            plunder=plunder*0.7
            // console.log(`${plunder} day%5`);
        }
    }
    // console.log(plunder);
    if (plunder<target) {
         // let percentage =  100-((target - plunder) / (target) * 100)               //percentage out of a targerNum //??
         let percentage2=(plunder/target)*100
         // console.log(`${percentage2} test`);
         console.log(`Collected only ${percentage2.toFixed(2)}% of the plunder.`);
    }else{
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    }
}
blackFlag(["5","40","100"])
// blackFlag(["10","20","380"])
    
