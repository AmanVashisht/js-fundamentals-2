// As a web developer, your task is to build a function that examines a sentence and counts how many 
// times each unique word appears in it. Using a ap, the function efficiently keeps track of the 
// occurrence of each word in the sentence


function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); 
        // console.log(words)
    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); 
        // console.log(cleanWord)
        console.log(cleanWord.length)
        console.log(wordFrequencyMap.get(cleanWord))
        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);