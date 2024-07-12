// function stringSubstring(word,txt) {
//     const lowercaseText = txt.toLowerCase().split(' ')
//     if (lowercaseText.includes(word)) {
//         console.log(word);
//     }else{
//         console.log(`${word} not found!`);
//     }
// }
// stringSubstring('javascript',
// 'JavaScript is the best programming language'
// )

// function extractFile(str) {
//     const elements = str.split('\\')
//     const lastElement = elements.pop()
//     const lastDotIdx = lastElement.lastIndexOf('.')
//     const fileName = lastElement.substring(0,lastDotIdx)
//     const fileExtension=lastElement.substring(lastDotIdx+1)
//     console.log(`File name: ${fileName}`);
//     console.log(`File extension: ${fileExtension}`);
// }
// extractFile('C:\\Internal\\training-internal\\Template.doxs.pptx')

// function cutAndReverse(str) {
//     const middleIndex = str.length/2
//     const firstPart = str.substring(0,middleIndex).split('').reverse().join('')
//     const secondPart = str.substring(middleIndex).split('').reverse().join('')
//     console.log(firstPart);
//     console.log(secondPart);
// }
// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')



// function replaceRepeatingChars(str) {
//     let nonRepeatedChars = ''
//     let currLastChar = ''
//     for (const char of str) {
//         if (char!==currLastChar) {
//             nonRepeatedChars+=char
//             currLastChar=char
//         }
//     }
//     console.log(nonRepeatedChars);
// }
// replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')



// function modernTimesOfHash(str) {
//     const words=str.split(' ')
//     const hashWords = words.filter(word=>word.startsWith('#') && word.length>1)
//     // console.log(hashWords);
    
//     const pattern = /\b[A-Za-z]+\b/    //regex
//     for (let hashtag of hashWords) {
//         hashtag=hashtag.substring(1)
        
//         if (pattern.test(hashtag)) {
//             console.log(hashtag);
//         }
//     }
// }
// modernTimesOfHash('Nowadays everyone uses # to tag a #special word in #socialMedia #123bv242')



// function revealWords(lib,str) {
//     const wordstoFill=lib.split(', ')
//     const textWords = str.split(' ')

//     const templates=textWords.filter(word=>word.includes('*'))
//     // console.log(templates);

//     for (const template of templates) {
//         const templeteLength = template.length
//         const rightWord = wordstoFill.find(word=>word.length === template.length)
//         str =str.replace(template,rightWord) 
//     }
//     console.log(str);
// }
// revealWords('great',
// 'softuni is ***** place for learning new programming languages'
// )


// function hardWords(arr) {
//     let letter= arr[0]
//     let wordsToFill = arr[1]

//     const letterWords =letter.split(/[.,!?:"]? /)
//     // console.log(letterWords);
//     const templates = letterWords.filter(word=>word.includes('_'))
//     // console.log(templates);
//     for (const template of templates) {
//         const rightWord=wordsToFill.find(word=>word.length===template.length)
//         letter = letter.replace(template,rightWord)
//     }
//     console.log(letter);
// }
// hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])


// function pascalCaseSplitter(str) {
//     const pattern = /[A-Z][a-z]*/g
//     const allMatches = str.matchAll(pattern)
//     // console.log(allMatches);
//     const result=[]
//     for (const matchObj of allMatches) {
//         result.push(matchObj[0])
//     }
//     console.log(result.join(', '));
// }
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')


//      RegEx modifieri
// + edin pyt ili pove4e
// * 0 pyti ili pove4e
// ? 0 ili 1 pyt
// g globane flag da tyrsi globalno a ne vednyj

// function passwordGenerator(arr) {
//     const[str1,str2,replacementStr]=arr
//     let password=str1+str2
//     let replacementIndex=0

//     for (const char of password) {
//         if (/[aeoui]/.test(char)) {
//             const replacementChar = replacementStr[replacementIndex]
//             password=password.replace(char,replacementChar.toUpperCase())
//             replacementIndex++
//             if (replacementIndex===replacementStr.length) {
//                 replacementIndex=0
//             }
//         }
//     }
//     const reversedPass = password.split('').reverse().join('')
//     console.log(`Your generated password is ${reversedPass}`);
// }
// passwordGenerator([
//     'ilovepizza', 'ihatevegetables','orange'])