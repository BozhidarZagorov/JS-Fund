function barcodes(arr) {
    const n=Number(arr.shift())
    const pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    const digits=/\d/g
    let group=''

    for (let i = 0; i < n; i++) {
        const barcode = arr[i];
        if (pattern.test(barcode)) {
            const productGroup = barcode.match(digits)
            if (productGroup!==null&&productGroup.length>0) {
                group=productGroup.join('')
            }else{
                group='00'
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
barcodes(["3",
    "@#Fre3sh4Fi5s7H@#",
    "@###Bre2aD@###",
    "@##Che3sE@##"])

barcodes(["6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"])  