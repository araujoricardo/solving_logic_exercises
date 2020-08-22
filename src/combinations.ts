/*
The Problem:
Given a word, print all permutations of all its letters. For example, for the word: ABC, you should print:
-	A
-	B
-	C
-	AB
-	AC
-	BA
-	BC
-	CA
-	CB
-	ABC
-	ACB
-	BCA
-	BAC
-	CAB
-	CBA


Your Solution:
You should write the code for function combos, and it should print all the combinations. 
You may write other functions if needed! Please avoid using the itertools module as part of the solution.
*/

function createBooleanArray(input:string[]):boolean[]{
    const booleanArray:boolean[] = [];

    for(let i=0; i<input.length; i++){
        booleanArray[i] = false;
    };

    return booleanArray;
};


function createCombinations(input:string[], compareArray:boolean[], list?:Set<string>, i:number = 0):Set<string>|undefined{
    if(i === 0){
        list = new Set<string>();
    };
    
    
    if(i === input.length){
        const aux:string[] = [];
        for(let j=0;j<input.length; j++){
            if(compareArray[j]){
                aux.push(input[j]);
            };
        };

        if(aux.join("") !== ""){
            list!.add(aux.join(""));
        };

    }else{
        compareArray[i] = true;
        createCombinations(input, compareArray, list, i+1);
        compareArray[i] = false;
        createCombinations(input,compareArray, list, i+1);
    };


    if(i===0){
        return list;
    };
};


function shiftLeftToRight(input:string[], leftIndex:number, rightIndex:number):string[]{
    const aux = input[leftIndex];
    input[leftIndex] = input[rightIndex];
    input[rightIndex] = aux;

    return input;
};


function createPermutations(input:string[], list?:Set<string>, i:number=0):Set<string>|undefined{
    if(i===0){
        list = new Set<string>();
    };
    

    if(i === (input.length-1)){
        list!.add(input.join(""));

    }else{
        for(let j = i; j<input.length; j++){
            shiftLeftToRight(input, i, j);
            createPermutations(input, list, i+1);
            shiftLeftToRight(input, i, j);
        };
    };


    if(i===0){
        return list;
    };
};


function print(input:Set<string>):void{
    input.forEach((element) => {
        console.log(element);
    });
};


function combos(word:string):void{
    const splitedWord = word.split("")

    const arrayComparacao = createBooleanArray(splitedWord);

    const combinacoes = createCombinations(splitedWord, arrayComparacao);

    combinacoes!.forEach((element:any)=>{
        const p = createPermutations(element.split(""));
        print(p!);
    });
};

combos("ABC");