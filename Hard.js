function solve(arr) {
    let words = arr.pop();
    let letter = arr[0];
    let index = letter.indexOf('_');
    let counter = 0;
    while (letter[index] == '_') {
        counter++;
        index++;
        if (letter[index] !== '_') {
            let word = words.filter(x => x.length == counter);
            letter = letter.replace('_'.repeat(counter), word);
            index=letter.indexOf('_');
            counter=0;
        }
        
    }
    console.log(letter);
}


solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)