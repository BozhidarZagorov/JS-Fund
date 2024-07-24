// function solve(arr) {
//     let msg = arr.shift()
//     while (arr[0]!=='Reveal') {
//         const line = arr.shift()
//         const tokens = line.split(':|:')
//         const command=tokens[0]

//         switch (command) {
//             case 'ChangeAll':
//                 const match = tokens[1]
//                 const replacement = tokens[2]
//                 msg=msg.split(match).join(replacement);
//                 console.log(msg);
//                 break;
//             case 'Reverse':
//                 const substring=tokens[1]
//                 const i = msg.indexOf(substring)

//                 if (i === -1) {
//                     console.log('error');
//                     continue
//                 }
//                 const left=msg.slice(0,i)
//                 const indexToContinueFrom = i+substring.length
//                 const right=msg.slice(indexToContinueFrom)
//                 const reversedSubstr=substring.split('').reverse().join('')
//                 msg = `${left}${right}${reversedSubstr}`
//                 console.log(msg);
//                 break
//             case 'InsertSpace':
//                 const index = Number(tokens[1])
//                 const firstPart = msg.slice(0,index)
//                 const secondPart=msg.slice(index)
//                 msg = `${firstPart} ${secondPart}`
//                 console.log(msg);
//                 break

//             default:
//                 break;
//         }

//     }
//     console.log(`You have a new text message: ${msg}`);
// }
// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ])
  

// function mirrorWords(arr) {
//     const msg=arr.shift()
//     const pattern = /(#|@)([A-z]{3,})\1\1([A-z]{3,})\1/gm
//     const result=[]
//     let match=pattern.exec(msg)
//     let counter = 0
//     // console.log(match);
//     while (match) {
//         counter++
//         const firstWord=match[2]
//         const secondWord=match[3]
//         const reversedSecondWord=secondWord.split('').reverse().join('')
//         if (firstWord===reversedSecondWord) {
//            result.push(`${firstWord} <=> ${secondWord}`)
//         }

//         match=pattern.exec(msg)
//     }
//     if (counter===0) {
//         console.log(`No word pairs found!`);
//     }else{
//         console.log(`${counter} word pairs found!`);
//     }
//     if (result.length===0) {
//         console.log('No mirror words!');
//     }else{
//         console.log('The mirror words are:');
//         console.log(result.join(', '));
//     }

// }
// mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])

function hOCandLVII(input) {
    class Hero{
        constructor(name,hp,mp){
            this.name=name
            this.hp=Number(hp)
            this.mp=Number(mp)
        }
        Heal(tokens){
            // console.log('Heal!');
            let hpToAdd=Number(tokens[2])
            if (hpToAdd+this.hp>100) {
                hpToAdd = 100-this.hp
            }
            this.hp+=hpToAdd
            console.log(`${this.name} healed for ${hpToAdd} HP!`);
        }
        Recharge(tokens){
            // console.log('Recharge!');
            let mpToAdd = Number(tokens[2])
            if (mpToAdd+this.mp>200) {
                mpToAdd=200-this.mp
            }
            this.mp+=mpToAdd
            console.log(`${this.name} recharged for ${mpToAdd} MP!`);
        }
        TakeDamage(tokens){
            // console.log('TakeDamage!');
            const dmg = Number(tokens[2])
            const attacker = tokens[3]
            this.hp-=dmg
            if (this.hp>0) {
                console.log(`${this.name} was hit for ${dmg} HP by ${attacker} and now has ${this.hp} HP left!`);
            }else{
                console.log(`${this.name} has been killed by ${attacker}!`);
                delete party[this.name]
            }
        }
        CastSpell(tokens){
            // console.log('CastSpell');
            const spellName = tokens[3]
            const mpCost = tokens[2]
            if (this.mp>=mpCost) {
                this.mp-=mpCost
                console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mp} MP!`);
            }else{
                console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
            }
        }
    }
    const n=Number(input.shift())
    const party={}
    for (let i = 0; i <n; i++) {
        const [name,hp,mp] = input.shift().split(" ")
        party[name] = new Hero(name,hp,mp)
    }
    while (input[0]!=='End') {
        const line = input.shift()
        const tokens = line.split(' - ')
        const [action,name] =tokens
        const hero = party[name]
        hero[action](tokens)   
    }
    for (const name in party) {
        const hero = party[name];
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}
hOCandLVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
    ])