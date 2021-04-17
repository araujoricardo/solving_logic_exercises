/*
Count how many times each word apears.

"Are you building any innovative solution solution for your 
students or students students students recruitment"
*/


// var str = "Are you building any innovative solution solution for your students or students students students recruitment"
// var count = {};
// str.split(" ").forEach((i) => { count[i] = ++count[i]|| 1});
//  console.log(count)


const text = "Are you building any innovative solution solution for your students or students students students recruitment"

const splittedText = text.split(" ")

// solution using object
const countObj: any = {}
splittedText.forEach((word: string)=> countObj[word] = ++countObj[word] || 1)

console.log(countObj)


// solution using hashTable
const hashTable = new Map<string, number>()

splittedText.forEach((word: string)=>{

    const currValue = hashTable.get(word)

    const value = currValue ? currValue + 1 : 1
    
    hashTable.set(word, value)
})

console.log(hashTable)