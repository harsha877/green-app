//return true if the variable lenght is zero
export const checkLenghtEqualToZero = (variable) => {
    console.log(variable + ' its lenght ' + variable.length);
    return variable.length == 0;
}


//capitalize the first char of every word
export const capitalizeEachWord = sentence => {

    const wordArray = sentence.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(" ");
}