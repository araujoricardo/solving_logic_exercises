"use strict";
/*
fazer uma função que verifica se todos os parenteses estão fechados.

exemplo:
input: "aqui, tem uma frase sem parenteses"
output: true

input: "aqu(i t(em um)a fr(ase com parentese)s fech)ados"
output: true

input: "aq(ui te(m uma fr)ase faltando pa(rentese)s"
output: false
*/
function checkBrackets(input) {
    const splitedInput = input.split("");
    const leftBracket = splitedInput.indexOf("(");
    const rightBracket = splitedInput.indexOf(")");
    if (leftBracket !== -1 && rightBracket !== -1) {
        for (let i = rightBracket - 1; i >= 0; i--) {
            if (splitedInput[i] === "(") {
                splitedInput.splice(rightBracket, 1);
                splitedInput.splice(i, 1);
                console.log(splitedInput.join(""));
                return checkBrackets(splitedInput.join(""));
            }
            ;
        }
        ;
        return false;
    }
    else if (leftBracket === -1 && rightBracket === -1) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
const myString = "aqui, tem uma frase sem p(arentes)(es)";
console.log(checkBrackets(myString));
