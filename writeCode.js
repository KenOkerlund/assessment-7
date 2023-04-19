// 1.
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] + arr[i] === 0){
                return true;
            }
        }
    }
    return false;
}
//Runtime is O(n^2)

//2
function uniqueChars(string){
    let stringArr = string.split("");
    const checkUnique = [...new Set(stringArr)];
    if(checkUnique.length !== string.length){
        return false;
    }
    else {
        return true;
    }
}

//Runtime is O(n) because we split, and create a new set which is O(n)

//3
function pangram(string){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let lowerString = string.toLowerCase();
    let count = 0;
    while(count < alphabet.length){
        if(lowerString.includes(alphabet[count])){
            count++
        }
        else {
            return false;
        }
    }
    if(count === alphabet.length){
        return true;
    }
}

//Runtime is O(n) because the input string is subject to change and we have a .includes

function findLongestWord(arr){
    let longestWord = 0;
    arr.forEach(word => {
        if(word.length > longestWord){
            longestWord = word.length;
        }
    })
    return longestWord;
}
//Runtime is O(n) because it depends on the arrays length