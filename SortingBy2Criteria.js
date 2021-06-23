function sort(arr) {
    for (let i = 0; i < arr.length; i++) {

        arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    }

    console.log(arr.join('\n'));
}


sort(["Psac", "Theodor", "Jack", "Harrison", "George"])