// function managePieces(input) {
//     let n = parseInt(input[0]);  // Number of initial pieces
//     let pieces = {};

//     // Reading the initial pieces
//     for (let i = 1; i <= n; i++) {
//         let [piece, composer, key] = input[i].split('|');
//         pieces[piece] = { composer, key };
//     }

//     // Processing the commands
//     for (let i = n + 1; i < input.length; i++) {
//         let commandLine = input[i];
//         if (commandLine === "Stop") break;

//         let [command, piece, arg1, arg2] = commandLine.split('|');

//         if (command === "Add") {
//             let composer = arg1;
//             let key = arg2;
//             if (pieces.hasOwnProperty(piece)) {
//                 console.log(`${piece} is already in the collection!`);
//             } else {
//                 pieces[piece] = { composer, key };
//                 console.log(`${piece} by ${composer} in ${key} added to the collection!`);
//             }
//         } else if (command === "Remove") {
//             if (pieces.hasOwnProperty(piece)) {
//                 delete pieces[piece];
//                 console.log(`Successfully removed ${piece}!`);
//             } else {
//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//             }
//         } else if (command === "ChangeKey") {
//             let newKey = arg1;
//             if (pieces.hasOwnProperty(piece)) {
//                 pieces[piece].key = newKey;
//                 console.log(`Changed the key of ${piece} to ${newKey}!`);
//             } else {
//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//             }
//         }
//     }

//     // Printing the final state of the collection
//     for (let piece in pieces) {
//         console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
//     }
// }
// managePieces([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'])
// managePieces([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'])