// let regExpPattern =/\d{2}-\d{2}-\d{4}/g
// let text = "Today is a good day and is 22-02-1999 Today is a good day and is 22-02-1998" //true
// // let text = "Today is a good day and is 22-July-1999" //false


// const isDateValid=regExpPattern.test(text)
// console.log(`is date valid: `,isDateValid);

// //matching reg                              // zavyrtqni za matchva neshto po patterna
// const MatchDAte=text.match(regExpPattern)
// console.log(MatchDAte);
// for (const date of MatchDAte) {
//     console.log(date);
// }


// const text = 'Peter: 123 Mark: 456 Cool: 321'
// const pattern = /([A-Z][a-z]+): (\d+)/g

// const firstMatch = pattern.exec(text)
// const secondMatch = pattern.exec(text)
// const thirdMatch = pattern.exec(text)
// // console.log(firstMatch);

// console.log('-------first match-------');
// for (const match of firstMatch) {
//     console.log(match);
// }
// console.log('------second match------');
// for (const match2 of secondMatch) {
//     console.log(match2);
// }
// console.log('------third match------');
// for (const match3 of thirdMatch) {
//     console.log(match3);
// }

//replace Regex

// const text = 'Peter: 123 Mark: 456 Cool: 321'
// const pattern = /\d{3}/g
// const newReplacedText=text.replace(pattern,' Kitten')
// console.log(newReplacedText);

// const text = 'test123test345'
// const regexp=/t(e)(st(\d{3}?))/g

// const matched = [...text.matchAll(regexp)]
// for (const m of matched) {
//     console.log(m);
// }

//split regex

// const text = '1   23   4'
// const regexp=/\s+/g
// const result=text.split(regexp)
// console.log(result);


// function matchNameFull(text) {
//     const pattern = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g
//     const result =text.match(pattern)
//     console.log(result.join(' '));
// }
// matchNameFull(`Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov`)

// function phoneNums(str) {
//     const pattern=/[+]359([ -])2\1(\d{3})\1(\d{4})\b/g
//     const validText = []
//     let validName=null
//     while ((validName=pattern.exec(str))!==null) {
//         validText.push(validName[0])

//     }
//     // const validText = str.match(pattern) //judge ne go priema s match
//     console.log(validText.join(', '))
// }