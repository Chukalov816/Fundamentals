function solve(words, text) {
    let wordsArr = words.split(', ');
    for (const word of wordsArr) {
        let stars = '*'.repeat(word.length);
        text = text.replace(stars, word)

    } console.log(text);

}


solve('great, learning',
    'softuni is ***** place for ******** new programming languages'

)