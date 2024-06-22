function inventory(arr) {
    const inv=arr.shift().split(', ')
    for (const element of arr) {
        if (element==='Craft!') {
            break
        }
        const commandsArr =element.split(' - ')
        const command=commandsArr.shift()
        const token = commandsArr.shift()
        if (command==='Collect') {
            if (!inv.includes(token)) {
                inv.push(token)
            }
        }else if (command==='Drop') {
            if (inv.includes(token)) {
                const removeIndex=inv.indexOf(token)
                inv.splice(removeIndex,1)
            }
        }else if (command==='Combine Items') {
            const twoElements = token.split(':')
            const oldItem = twoElements[0]
            const newItem = twoElements[1]
            if (inv.includes(oldItem)) {
                const oldItemIndex = inv.indexOf(oldItem)
                inv.splice(oldItemIndex+1,0,newItem)
            }
        }else if (command === 'Renew') {
            if (inv.includes(token)) {
                const itemIndex=inv.indexOf(token)
                const removedItem = inv.splice(itemIndex,1)
                inv.push(removedItem[0])
            }
        }

    }
    console.log(inv.join(', '));
}
inventory(['Iron, Wood, Sword', 
           'Collect - Gold', 
           'Drop - Wood', 
           'Craft!'])

inventory(['Iron, Sword',
            'Drop - Bronze',
            'Combine Items - Sword:Bow',
            'Renew - Iron',
            'Craft!'])
