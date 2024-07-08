function solve(num,p) {
    const result = []
    const saveNum = num
    let zeroCounter=0
    let oneCounter = 0
    while (num!==0) {
        if (num%2===0) {
            result.push(0)
            num=num/2
            zeroCounter++
        }else if (num%2!==0) {
            result.push(1)
            num=(num-1)/2
            oneCounter++
        }
    }
    // console.log(result[1]); // bit at position 1
    // console.log(result[p]); // bit at position p
    // result[p]=0             // bit at position p = 0

    // for (let i = 0; i < 3; i++) {    //tri-bit XOR at positions p p+1 p+2// part 1
    //     if (result[p+i]===1) {
    //         result[p+i]=0
    //     }else{
    //         result[p+i]=1
    //     }
    // }

    console.log(`${saveNum} -> ${result.reverse().join('')}`);

    // console.log(zeroCounter);
    // console.log(oneCounter);

    // let result2=0            //tri-bit// part 2
    // for (let i = 0; i < result.length; i++) {
    //     const element = result[i];
    //     result2=result2+(element*(2**(result.length-i)))
    // }
    // console.log(result2/2);
}
solve(44444,4)
//from decimal to binary with twists