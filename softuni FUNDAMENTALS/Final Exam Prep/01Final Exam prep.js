function destinationMapper(arr) {
    let deletedElements=[]
    let output=[]
    let str =arr
    const delEl=/(=|\/)(?<destination>[A-Z][\d]\w{3,}[a-z])\1/g
    const pattern=/(=|\/)(?<destination>[A-Z]\w{3,}[a-z])\1/g
    let del=delEl.exec(str)
    // console.log(del[2]);
    let executed=pattern.exec(str)
    let sum=0

    while (del){
        // console.log(executed.groups.destination);
        deletedElements.push(del[2])
        del=delEl.exec(str)
    }
    while (executed){
        // console.log(executed.groups.destination);
        if (!deletedElements.includes(executed.groups.destination)) {
            output.push(executed.groups.destination)
        }
        executed=pattern.exec(str)
    }
    // console.log(deletedElements);
    console.log(`Destinations: ${output.join(', ')}`);

    for (const places of output) {
        const len=places.length
        sum+=len
    }
    console.log(`Travel Points: ${sum}`);
}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')