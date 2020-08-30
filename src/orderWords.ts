/*
Escreva um método que receba uma string qualquer e retorna uma lista
com as palavras ordenadas alfabeticamente. Por exemplo, passando string "oi, tudo bem?"
como parâmetro retorna ["bem", "oi", "tudo"]
*/


function orderWords(input:string):string[]{

    const regexString: string = input.replace(/[^a-zA-Z]/, "");
    const splitedString = regexString.split(" ");
    const ordenedString = splitedString.sort();

    return ordenedString;
};

const tes = "oi, agua bom dia";

console.log(orderWords(tes));