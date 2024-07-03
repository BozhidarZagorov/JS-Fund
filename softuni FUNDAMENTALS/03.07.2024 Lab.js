/*

const wallet = {
    balance: 1000,userId:'pesho123'
}
const arr = [1,2,3]
console.log('array: ',arr[0]);
const associativeArr={
    first:1,second:2,third:3
}
console.log('assoc arr: ',associativeArr['first']);
console.log('obj: ',associativeArr.first);

const phoneBook = {
    'Asen Petrov':'0875 213 2345',
    'Boris Marinov':'0845 513 6345',
    'Peter Ivanov':'0875 222 5342',
    'Zoya Kirilova':'0875 215 3344',
    gosho_ivanov:'123'
}

// phoneBook["Asen Petrov"]
// phoneBook.gosho_ivanov

console.log(phoneBook["Asen Petrov"]);


**/

/*

const stats = {'0-40':0,'40-80':0,'80-120':0}

const ppl=[
    {name:'Denko',age:52},
    {name:'penko',age:81},
    {name:'menko',age:30},
    {name:'4enko',age:20},
    {name:'shenko',age:12},
    {name:'olinko',age:100}
]

ppl.forEach((person)=>{
    console.log(person.age);
    if (person.age>0&&person.age<=40) {
        stats['0-40']+=1
    }else if (person.age>40&&person.age<=80) {
        stats['40-80']+=1
    }else if (person.age>80&&person.age<=120) {
        stats['80-120']+=1
    }
})
console.log(stats);
const group15to60=stats['0-40']
delete stats['0-40']
console.log(stats);
stats['15-60'] = group15to60
console.log(stats);


**/

/*

const obj={}
const numbersStr=['first','second','third']
let index= 0
for (const num of numbersStr) {
    obj[num]=index
    index++
}
console.log(obj);

// for of =>array
// for in => obj,associative arrays, dictionaries

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}



**/

// function solve(input) {
//     const phoneBookey={}
//     for (const personDetails of input) {
//         const detailsArr=personDetails.split(' ')
//         const name = detailsArr[0]
//         const num = detailsArr[1]
//         phoneBookey[name]=num
//     }
//     // console.log(phoneBookey);

//     for (const key in phoneBookey) {
//         console.log(`${key} -> ${phoneBookey[key]}`);
//         // console.log(phoneBookey.hasOwnProperty('Tim')); // checkva dali ima syotveten kliu4 v masiva/obj
//     }
// }

// solve(['Tim 123','Maria 234','Gosho 345','Tim 456'])


// const person = {
//     age:12,
//     name:'Ivan'
// }
// const {age,name} = person
// console.log(age,name);


// function solve(input) {
//     const meetings = {}
//     for (const reservation of input) {
//         const [weekday,name]= reservation.split(' ')     //destructorirane 
//         // console.log(weekday, name);
//         if (!meetings.hasOwnProperty(weekday)) {
//             meetings[weekday]=name
//             console.log(`Scheduled for ${weekday}`);
//         }else{
//             console.log(`Conflict on ${weekday}!`);
//         }
//     }

//     for (const key in meetings) {
//         console.log(`${key} -> ${meetings[key]}`);
//     }


// }
// solve(['Monday Peter','Wednesday bill','Monday tim','Friday tim'])



// const phonebookyyy={
//     tim:123456,
//     bill:9423
// }

// const entries = Object.entries(phonebookyyy)
// entries.sort(([keyA,valueA],[keyB,valueB]) =>{
//     // return keyA.localeCompare(keyB)  // decending
//     // return keyB.localeCompare(keyA)  // acending
//     // return valueB - valueA           // bigger
//     // return valueA - valueB              // smaller
// })
// for (const x of entries) {
//     console.log(x);
// }


// function solve(input) {
//     const result={}

//     for (const row of input) {
//         const [name,address] = row.split(':')
//         result[name]=address
//     }
//     const entrie=Object.entries(result)
//     entrie.sort(([keyA,valueA],[keyB,valueB])=>{
//         return keyA.localeCompare(keyB)
//     })
//     // console.log(result);
//     for (const [name,address] of entrie) {
//         console.log(`${name} -> ${address}`);
//     }

// }
// solve(['Tim:doe crossing','Bill:nelson ddsd','Peter:cardsd sdsdf', 'Bill:ornery rd'])


// const arr = [1,2,2,3,4,5,2]

// const unique = new Set(arr)
// console.log(unique);
// unique.delete(1)   // maha ot lqvo nadqsno
// console.log(unique);
// console.log(unique.keys());
// console.log([...new Set(arr)]);    // vryshta go kato masiv  [... ] - spreading  v slu4aq arr se buta v tezi 3-to4ki kato masiv


// const map = new Map()

// map.set('a',1)
// map.set('b',2)
// map.set('c',3)
// map.set('d',4)
// map.set('e',5)

// console.log(map);           // pomni reda na vkarvane v masiva  map=asociativen masiv koito pazi reda


// MAP -> helps with keeping the order of insertion of the key-value pairs
// set -> helps with keeping unique values