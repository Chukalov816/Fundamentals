function solve([first, second, word]) {
    let pass = first + second;
    let last = word.length - 1;
    let counter = 0;
    let isVowel = (x) => 'aouie'.indexOf(x.toLowerCase()) !== -1;
    for (const char of pass) {
        if (isVowel(char)) {
            pass = pass.replace(char, word[counter].toUpperCase());
            counter++;
            if (counter > last) {
                counter = 0;
            }
        }
    }
    console.log(`Your generated password is ${pass.split('').reverse().join('')}`);
}




solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)