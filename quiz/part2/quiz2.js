// Soal 1
console.log('Soal 1');

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(word, second, third, fourth, fifth, sixth, seventh);

// Soal 2 Index Accessing - 1 by 1
console.log('Soal 2');

let word2 = 'wow JavaScript is so cool';
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let SecondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let ThirdWord = word2[15] + word2[16];
let FourthWord = word2[18] + word2[19];
let FifthWord = word2[21]+ word2[22] + word2[23] + word2[24]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + SecondWord);
console.log('Third Word : ' + ThirdWord);
console.log('Fourth Word : ' + FourthWord);
console.log('Fifth Word : ' + FifthWord);
//lanjutkan dengan struktur log diatas

// Soal 3 Breaking Sentence (Again) using Substring
console.log('Soal 3');

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + exampleSecondWord3);
console.log('Third Word: ' + exampleThirdWord3);
console.log('Fourth Word: ' + exampleFourthWord3);
console.log('Fifth Word: ' + exampleFifthWord3);

// Soal 4. Breaking Sentence (yet Again) and Count Each Length
console.log('Soal 4');

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let SecondWordLength = exampleSecondWord4.length;
let ThirdWordLength = exampleThirdWord4.length;
let FourthWordLength = exampleFourthWord4.length;
let FifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + SecondWordLength);
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + ThirdWordLength);
console.log('Fourht Word: ' + exampleFourthWord4 + ', with length: ' + FourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord4 + ', with length: ' + FifthWordLength);
