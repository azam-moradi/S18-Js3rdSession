const arr = ['dorsa', 'roya', 'helia', 'mohammad', 'amir', 'kimia', 'azam', 'fatemeh'];
console.log(arr.length);

console.log(arr.toString());

document.getElementById('name').innerHTML = arr.toString();

console.log(arr[3]);

console.log(arr.at(0));

console.log(arr[-1]);

console.log(arr.join('+'));

arr.pop();

arr.push('maryam');

console.log(arr);

const arr2 = ['hosna', 'arman', 'hedie'];

arr2.shift();

console.log(arr2);

arr2.unshift({ firstNmae: 'azam' });

console.log(arr2);

const arr3 = ['ali'];
const arr4 = ['elsa', 'elinaz'];

const all = arr3.concat(arr4, arr);

console.log(all);

const nestedArray = [[4, 5], [6, 90]];

const flattedArray = nestedArray.flat();

console.log(flattedArray);

const firstNames = [1, 2, 3, 4];

const flattedMapFirstName = firstNames.flatMap((firstName, all) => {
    return firstName * 2 + 'azam' + all;
});

console.log(flattedMapFirstName);

flattedMapFirstName.splice(2, 2, 'ali', 25)

console.log(flattedMapFirstName);

const arr5 = ['a', 'b', 'c', 'd', 'e'];
// arr5.splice(0, 2);

const arr6 = arr5.slice(1, 3);
console.log(arr6);
const arr7 = ['a', 'b', 'c', 'd', 'e'];
const arr8 = arr7.slice(-2);
console.log(arr8);

const people = [
    {
        firstName: 'Ali',
        lastName: 'Jafari'
    },
    {
        firstName: 'Azam',
        lastName: 'Moradi'
    },
    {
        firstName: 'Dorsa',
        lastName: 'Beigi'
    },
    {
        firstName: 'Mohammad',
        lastName: 'Jafari'
    },
    {
        firstName: 'Fatemeh',
        lastName: 'Hashemi'
    },
    {
        firstName: 'Roya',
        lastName: 'Ketabchi'
    },

]

function searchPerson(value, index, array){
    const keyword = 'jafari'
if(value.lastName.toLowerCase() === keyword.toLowerCase()){
    return value;
}
 return
}


const result= people.find(searchPerson);

console.log(result);

const result2= people.findIndex(searchPerson);

console.log(result2);

//Date

const date = new Date('2023-03-05');
console.log(date);

const date2=new Date(2015, 11, 25, 10, 15);

console.log(date2);

const date3=new Date(558191404000);
console.log(date3);

console.log(date3.toString());

console.log(date3.getMonth()+1, date3.getFullYear(), date3.getDay(), date3.getDate());

date3.setMonth(0);
console.log(date3);

date3.setFullYear(1989);
console.log(date3);



// const postItem = {
//     title: 'Title',
//     description: 'awdlksd;fl sd;lfk a;slfk asdf a',
//     createdAt: '2024-11-19',
//     modifiedAt: '2024-11-21'
// }

//moment js library , moment jalali



//------

//strings

let str1 = 'abcdefghijklmnopqrstuvwxyz';
console.log(str1.length);

console.log(str1.charAt(0));

console.log(str1.at(2));

console.log(str1.charCodeAt(1));

console.log(str1[25]);

let str2 = 'azam,dorsa, mohammad';
let resultStr2 = str2.slice(-5,-2);
console.log(resultStr2);

console.log(resultStr2.toUpperCase());

let str3='hsdjkasjdhgfcjs,DFGHSDGFASAc'

console.log(str3.toLowerCase());

let str4 = str3.concat(str2);
console.log(str4);

let str5 = "         hello           ";
console.log(str5.trim());

console.log(str5.trimStart());

console.log(str5.trimEnd());

let str6= "52"

console.log(str6.padStart(2, 'y'));
console.log(str6.padStart(6, 'y'));
console.log(str6.padStart(50, 'y'));
console.log(str6.padStart(100, 'y'));

let str7 = ' azam moradi';
let resultstr7=str7.repeat(4);
console.log(resultstr7);

console.log(resultstr7.replace('azam','dorsa').toUpperCase());

console.log(resultstr7.replaceAll('azam','dorsa'.toUpperCase()));

let str8 ="azam-moradi-dorsa-beigi-roya-ketabchi";

console.log(str8.split("-"));


let str9= "q=nodejs&oq=nodejs&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIJCAkQABgKGIAE0gEIMjE1MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8";
console.log(str9.split("&"));
let name = 'azam';
let str10 = `hello ${name}`;
console.log (str10);