// const ages = [23,35,23,45,87]
// // const personalInfo = [`Pen4o`,34,`Sofia`,45,23]  //wrong practice

// const personalInfoObj={name:'Pen4o',age:34,city:'Sofia'}

// function employees(arr) {
//     let allEmployeees=[]
//     //read employees info
//     for (const employeeName of arr) {
//         const personalNumber = employeeName.length
//         const employee={
//             name:employeeName,personalNum:personalNumber
//         }
//         allEmployeees.push(employee)
//         // console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
//     }
//     // console.log(allEmployeees);
//     for (const employeeObj of allEmployeees) {
//         // console.log(employeeObj);
//         console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum}`);
//     }
// }
// employees([

//     'Silas Butler',
    
//     'Adnaan Buckley',
    
//     'Juan Peterson',
    
//     'Brendan Villarreal'
    
//     ])

// function towns(arr) {
//     for (const townStr of arr) {
//         let tokens = townStr.split(' | ')
//         const townName = tokens.shift()
//         const townLatitude=Number(tokens.shift())
//         const townLongitude=Number(tokens.shift())
        
//         const curTown={
//             town:townName,latitude:townLatitude.toFixed(2),longitude:townLongitude.toFixed(2)
//         }
//         console.log(curTown);
//     }
// }
// towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])


// function manageMovies(arr) {
//     const movies=[]

//     for (const command of arr) {
//         if (command.includes('addMovie')) {
//             const tokens=command.split('addMovie ')
//             const movieName = tokens[1]

//             movies.push({name:movieName})
//         }else if (command.includes('directedBy')) {
//             const [movieName,movieDirector] = command.split(' directedBy ')     //destructorirane pyrviqt element go vzima na movieName a vtoriq na movieDirector
            
//             const existingMovie = movies.find(movieObj=>movieObj.name===movieName)          //sys .find se tyrsi v objects
//             if (existingMovie) {
//                 existingMovie.director=movieDirector
//             }
//         }else if (command.includes('onDate')) {
//             const [movieName,date]=command.split(' onDate ')

//             const existingMovie = movies.find(movieObj=>movieObj.name===movieName)
//             if (existingMovie) {
//                 existingMovie.date=date
//             }
//         }
//     }
//     for (const movieObj of movies) {
//         if (movieObj.name && movieObj.director && movieObj.date) {
//             console.log(JSON.stringify(movieObj));
//         }
//     }
// }
// manageMovies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ])

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// // zada4ka s class

// class Vehicle {
//     type
//     model
//     parts
//     fuel

//     constructor(type,model,parts,fuel){
//         this.type= type
//         this.model = model
//         this.fuel=fuel

//         parts.quality=parts.engine*parts.power
//         this.parts=parts
//     }
//     drive(fuelloss){
//         this.fuel-=fuelloss
//     }
// }

// // let parts = { engine: 6, power: 100 };
// // let vehicle = new Vehicle('a', 'b', parts, 200);
// // vehicle.drive(100);
// // console.log(vehicle.fuel);
// // console.log(vehicle.parts.quality);

// let parts = {engine: 9, power: 500};
// let vehicle = new Vehicle('l', 'k', parts, 840);
// vehicle.drive(20);
// console.log(vehicle.fuel);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Storage{
//     constructor(capacity){
//         this.capacity=capacity
//         this.storage=[]
//         this.totalCost=0
//     }
//     addProduct(productObj){
//         this.storage.push(productObj)
//         this.capacity-=productObj.quantity

//         const totalProductPrice=productObj.price*productObj.quantity
//         this.totalCost+=totalProductPrice
//     }
//     getProducts(){
//         const result=[]
//         for (const productObj of this.storage) {
//         result.push(JSON.stringify(productObj));
//         }
//         return result.join('\n')
//     }
// }


// let productOne = {name: 'Cucamber',price: 1.50, quantity: 15};
//     let productTwo = {name: 'Tomato',price: 0.90, quantity: 25};
//     let productThree = {name: 'Bread',price: 1.10, quantity: 8};
//     let storage = new Storage(50);
//     storage.addProduct(productOne);
//     storage.addProduct(productTwo);
//     storage.addProduct(productThree);
//     console.log(storage.getProducts());
//     console.log(storage.capacity);
//     console.log(storage.totalCost);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////