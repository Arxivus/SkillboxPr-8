function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let wordLower = word.toLowerCase()

    let letters = wordLower.split("")
    
    let vowelsInWord = letters.filter((letter) => {
        return vowels.indexOf(letter) !== -1
    });
    
    return vowelsInWord.length
}

const word = 'JavaScript'
const vowelCount = countVowels(word)
console.log(vowelCount)