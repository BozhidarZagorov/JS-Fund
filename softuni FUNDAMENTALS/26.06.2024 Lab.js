// let obj={key1: 'Zdrasti',key2: true,}    //obekt
// let arr = []  // masiv

// console.log(obj.key2);              // key se izvikva s to4ka '.'

// let arra={
//     0: 123,
//     1: 45,
//     2: 355
// }                       // v tozi slu4ai indeksite sa kato kliu4ove 
// console.log(arr[0]);



// let obj1={x:5,y:6,sum:function(){           /// moje i funkcii v object
//     return this.x+this.y
// }}    //property na obekta

// let b=5
// let c=5

// function sum() {
//     return b+c
// }

// function subtract() {
//     return b-c
// }

// let obj = {
//     x:5,
//     y:'Zdrasti',
//     z: true,
//     v:undefined,
//     b:[1,2,3,4],
//     a:null,
//     q: {name: 'Pesho',age:123},
//     speak:function (message) {
//         console.log(message);
//     }
// }
// let property = 'x'
// console.log(obj.x);
// console.log(obj['x']);                  // i dvete izvikvaniq sa ednakvi
// console.log(obj[property]);             // moje da e promenliva koqto se smenq

// obj.speak('Zdrasti priqtelio')
// obj['speak']('Hi')


// let person={
//     name: 'Ivan',
//     age:23,
//     introduce: function () {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} y/o old!`);
//     },
// }

// console.log(person.name);
// console.log(person.age);
// person.introduce()

//////////////////////////////////////////////////////////////////////
// const dog={}

// // dog['name']='Roshkavo'           //ednakvo s dolnoto
// dog.name = 'Roshko'
// dog.age = 3                         //dobavqme kym object
// dog.bark = function () {
//     console.log('bark bark bark');
// }

// console.log(dog);           //logvame objecta 
// dog.bark()

// dog.name='Pesho'                // moje da se izmenq ot kliu4a
// console.log(dog.name);
//////////////////////////////////////////////////////////////////////

// function solve(firstName,lastName,age) {
//     let person={}
//     // let person = {
//     //     firstName:firstName,
//     //     lastName:lastName,
//     //     age:age
//     // }
//     person.firstName=firstName
//     person.lastName=lastName
//     person.age=age
    

//     // const person = {                    //kogato kliu4a i imeto na obekta sa ednakvi e vyzmojno da se sykrati po tozi na4in
//     //     firstName,
//     //     lastName,
//     //     age
//     // }
//     return person
// }
// console.log(solve('Peter','Pan',20))

// const speak3 = ()=>console.log('Hi3!');
// const person = {
//     speak(){
//         console.log('Hi!');
//     },

//     speak2:function() {
//         console.log('Hi2!');
//     },
//     // speak3:()=>console.log('Hi3!');
//     speak3
// }

// person.speak()
// person.speak2()
// person.speak3()


// const person = {
//     name: 'Pesho',
//     age: 12, 
//     address:'Sofia,BG',greet(){
//         console.log('Zdrasti');
//     }
// }
// console.log(Object.keys(person));           // izvikvame vsi4ki kliu4ove v daden obekt
// console.log(Object.values(person));         // izvikvame vsi4ki stoinosti na kliu4ovete na daden obekt
// console.log(Object.entries(person));        // pravi vsqka dvoika kliu4 i obekt v masivi

// const entries=Object.entries(person)
// console.log('Loop:');
// for (let i = 0; i < entries.length; i++) {
//     console.log(entries[i]);
//     // console.log(entries[i][0]); //vsi4ki kliu4ove
//     // console.log(entries[i][1]);//vsi4ki stoinosti na kliu4ovete

    
// }


// function solve(city) {

//     for (const key of Object.keys(city)) {
//         console.log(`${key} -> ${city[key]}`);
        
//     }
    
// }
// solve({
//     name: 'Sofia',
//     area:492,
//     population:12321321,
//     country: 'Bulgaria',
//     postcode: 1000
// })



// let obj1={}
// let obj2={}
// obj2=obj1
// obj1.name='Pesho'
// obj2.testName="luchkata"

// console.log(obj1);
// console.log(obj2);


// let obj1={
//     name:'Pesho',age:123,address:['a','b','c']
// }
// console.log(JSON.stringify(obj1));
// console.log(JSON.parse(`{"name":"Pesho","age":123,"address":["a","b","c"]}`));


// function solve(jsonString) {
//     const obj=JSON.parse(jsonString)
//     const tuples = Object.entries(obj)               //From JSON to js
    
//     for (const tuple of tuples) {
//         console.log(`${tuple[0]}: ${tuple[1]}`);
//     }
// }

// function solve(name,lastName,hairColor) {
//     const person={name,lastName,hairColor}               //from js to JSON
//     console.log(JSON.stringify(person));
// }
// solve('george','jonas','brown')


// class Person {
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

// }

// const ivanPerson = new Person('Ivan',18)
// console.log(ivanPerson);
// const silviaPerson = new Person('Silvia',21)
// console.log(silviaPerson);


// class CookieCutter{
//     constructor(flavor){
//         this.flavor=flavor
//     }
// }

// const chocoCookie = new CookieCutter('Chocolate')
// console.log(chocoCookie);
// const pineappleCookie = new CookieCutter('Pineapple')
// console.log(pineappleCookie);

// function solve(catAsStrings) {

//     class Cat{
//         constructor(name,age){
//             this.name=name
//             this.age=age
//         }
//         meow(){
//             console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }

//     for (const catStr of catAsStrings) {
//         // const [name,age] = catStr.split(' ')
//         const tokens = catStr.split(' ')
//         const name = tokens[0]
//         const age = tokens[1]
//         const cat = new Cat(name,age)
//         cat.meow()
//     }

// }
// solve(['Candy 1','Kitty 5','Tom 7'])

