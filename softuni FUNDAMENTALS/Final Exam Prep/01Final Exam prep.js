// function destinationMapper(arr) {
//     let deletedElements=[]
//     let output=[]
//     let str =arr
//     const delEl=/(=|\/)(?<destination>[A-Z][\d]\w{3,}[a-z])\1/g
//     const pattern=/(=|\/)(?<destination>[A-Z]\w{3,}[a-z])\1/g
//     let del=delEl.exec(str)
//     // console.log(del[2]);
//     let executed=pattern.exec(str)
//     let sum=0

//     while (del){
//         // console.log(executed.groups.destination);
//         deletedElements.push(del[2])
//         del=delEl.exec(str)
//     }
//     while (executed){
//         // console.log(executed.groups.destination);
//         if (!deletedElements.includes(executed.groups.destination)) {
//             output.push(executed.groups.destination)
//         }
//         executed=pattern.exec(str)
//     }
//     // console.log(deletedElements);
//     console.log(`Destinations: ${output.join(', ')}`);

//     for (const places of output) {
//         const len=places.length
//         sum+=len
//     }
//     console.log(`Travel Points: ${sum}`);
// }
// destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')



function backery(arr) {
    let inv = {}
    let Retokens=arr.shift().split(' ')
    let command = Retokens[0]
    //restock
    while (command==='Receive') {
        let amount = Number(Retokens[1])
        const food = Retokens[2]

        if (amount<=0) {
            Retokens=arr.shift().split(' ')
            command = Retokens[0]
            continue
        }else{

            if (food in inv) {
                inv[food].quantity+=amount
            }else{
                inv[food] = {quantity:amount}
            }
        }

        Retokens=arr.shift().split(' ')
        command = Retokens[0]
    }    
    //selling
    let soldQty=0
    while (command==='Sell') {
        let amount = Number(Retokens[1])
        const food = Retokens[2]
        if (amount<=0) {

            Retokens=arr.shift().split(' ')
            command = Retokens[0]
            continue
        }else{
            if (food in inv) {
                if (inv[food].quantity-amount<0) {
                    console.log(`There aren't enough ${food}. You sold the last ${inv[food].quantity} of them.`);
                    soldQty+=inv[food].quantity
                    delete inv[food]
                    
                }else{
                    inv[food].quantity-=amount
                    soldQty+=amount
                    console.log(`You sold ${amount} ${food}.`);
                    
                    if (inv[food].quantity===0) {
                        delete inv[food]
                    }
                }
            }else{
                console.log(`You do not have any ${food}.`);
            }
        }
        Retokens=arr.shift().split(' ')
        command = Retokens[0]
    }

    if (command==='Complete') {
        let invEntry=Object.entries(inv)
        for (const [food,left] of invEntry) {
            console.log(`${food}: ${left.quantity}`);
            
        }
        console.log(`All sold: ${soldQty} goods`);    
    }
}
// backery(['Receive 105 cookies',
//     'Receive 10 donuts',
//     'Sell 10 donuts',
//     'Sell 1 bread',
//     'Complete'])
backery(['Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'])
    
