/*
SEARCHING CHALLENGE

Have the function SearchingChallenge(strArr) read in the strArr
paramente containing key:value pairs where the key is a string and the value is an integer.
Your program should return a string with new key:value pairs separated by a comma such that
each key appears only
once with the total values summed up.

for example if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6, B:2.

Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0
after being summed up.

examples
input: ["X:-1", "Y:1", "X:-4", "B:3", "X:5"]
output: B:3, Y:1

input: ["Z:0", "A:-1"]
output: A:-1
*/

function searchingChallenge(strArr:any[]){

    const hash:any ={}

    for(const element of strArr){

        const key: string = element.split(":")[0];
        const value:number = Number(element.split(":")[1]);

        if(hash[key] === undefined){
            hash[key] = value
        }else{
            hash[key] = hash[key] + value
        };
    };

    const ordenatedHash:any = {};

    Object.keys(hash).sort().forEach((key)=>{
        ordenatedHash[key] = hash[key]
    });


    const result = Object.keys(ordenatedHash).reduce((acc, curr)=>{
        
        if(ordenatedHash[curr] === 0){
            return acc;
        };

        if(acc === ""){
            return `${curr}:${ordenatedHash[curr]}`;
        };

        return `${acc},${curr}:${ordenatedHash[curr]}`;
    }, "");

    return result;  
};

const input = ["Z:0", "A:-1", "A2:-3"];

console.log(searchingChallenge(input));


//using Hash table from JS;

// interface Hash {
//     [index: string]: number;
//   }
//   const array = ["P:12", "g:21", "P:1", "pi:32"];
//   const hash = new Map<string, number>();
//   for (const str of array) {
//     const key = str.split(":")[0];
//     const value = str.split(":")[1];
//     if (hash.get(key)) {
//       hash.set(key, hash.get(key)! + Number(value));
//     } else {
//       hash.set(key, Number(value));
//     }
//   }
//   const keys = Array.from(hash.keys()).sort((a, b) => (a > b ? 1 : -1));
//   const str = keys.reduce((acc, curr, i) => {
//     if (hash.get(curr) === 0) {
//       return acc;
//     }
//     if (i === 0) {
//       return `${acc}${curr}:${hash.get(curr)}`;
//     }
//     return `${acc},${curr}:${hash.get(curr)}`;
//   }, "");
//   console.log(str);