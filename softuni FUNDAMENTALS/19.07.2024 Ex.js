// function regexDemo(arr) {
//     const pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/
//     let sum = 0
//     let command = arr.shift()
//     let items = []
//     while (command!=='Purchase') {
//         let match=command.match(pattern)

//         if (match) {
//             // console.log(match.groups);
//             let {name,price,quantity}=match.groups // stava kato key and value
//             items.push(name)
//             const furniturePrice = Number(price)*Number(quantity)
//             sum+=furniturePrice
//         }
//         command=arr.shift()
//     }
//     console.log('Bought furniture:');
//     items.forEach(item=>console.log(item))
//     console.log(`Total money spend: ${sum.toFixed(2)}`);
// }
// regexDemo(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']
//     )



// function race(arr) {
    
//     let names = arr.shift().split(', ')
//     let result={}
//     names.forEach(name => result[name]=0) 
//     let command=arr.shift()
//     let letterPattern = /[A-Za-z]/g 
//     let digitPattern = /\d/g

//     while (command!== 'end of race') {
//         let letterMatch = command.match(letterPattern)
//         // console.log(letterMatch);
//         let name = letterMatch.join('')
//         let digitMatch = command.match(digitPattern)
//         // console.log(digitMatch);
//         let distance = digitMatch.map(Number).reduce((acc,val)=>acc+val)
//         ////////////////////////
//         // let distance = 0
//         // for (const digit of digitMatch) {
//         //     distance+=Number(digit)
//         // }
//         // console.log(distance);
//         ////////////////////////
//         if (name in result) {
//             result[name]+=distance
//         }
//         ////////////////////////
//         // if (result.hasOwnProperty(name)) {
//         //     result[name]+=distance
//         // }
//         ////////////////////////
        
//         command=arr.shift()
//     }
//     let sortedRacers = Object.entries(result).sort((a,b)=>b[1]-a[1])
//     // console.log(sortedRacers);
//     // sortedRacers.forEach(e=>console.log(e))
    
//     console.log(`1st place: ${sortedRacers[0][0]}`);
//     console.log(`2nd place: ${sortedRacers[1][0]}`);
//     console.log(`3rd place: ${sortedRacers[2][0]}`);
// }
// race(['George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race'])




function softuniBar(arr) {
    const pattern =/%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/
    let total = 0
    let line = arr.shift()
    while (line!=='end of shift') {

        let isValid =line.match(pattern)
        if (!isValid) {
            line=arr.shift()
            continue
        }
        let customerNamer = isValid.groups.customer
        let productName = isValid.groups.product
        let count=isValid.groups.count
        let price=isValid.groups.price
        // console.log(`Count ${count} ------ Price${price}`);
        let currentTotal = Number(count)*Number(price)
        total+=currentTotal
        
        console.log(`${customerNamer}: ${productName} - ${currentTotal.toFixed(2)}`);

        line=arr.shift()
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
softuniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|5|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
    )