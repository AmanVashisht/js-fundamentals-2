// As a web developer, you need to create a function that takes a username string as input and checks
//  if it contains only unique characters.  Use a Set to implement this efficiently.

// uniqueCharactersCheck(input){
    
//     console.log(input)
// }

function uniqueCharactersCheck(inputString) {
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}

uniqueCharactersCheck("mithun")
uniqueCharactersCheck("anurag")