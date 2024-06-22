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
        }else if (day%5===0) {
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
    
// ???? 60/100 nz kyde da gyrmi dori i procentite iz4istih s percentage 2 ddz ve4e i zavyrtqn if ne mu haresva nz ve4e baligo
// po nqkakva pri4ina 50 /500 /5000 kato dni imat ednakyv rezultat moje bi tam trqbva da se pogledne