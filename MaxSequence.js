function solve(arr) {
    let sequence = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let currentSequence = [element];
        for (let j = i + 1; j < arr.length; j++) {
            if (element == arr[j]) {
                currentSequence.push(arr[j]);

            } else {
                break;
            }

        }
        if (sequence.length < currentSequence.length) {
            sequence = currentSequence;
        }

    }console.log(sequence.join(' '));
}