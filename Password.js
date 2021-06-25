function password(pass) {
    pass = pass.split('');
    let digitCount = 0;
    let isOther = false;


    for (let i = 0; i < pass.length; i++) {
        let ascii = pass.join('').toString().charCodeAt(i);
        if (ascii > 47 && ascii < 58) {
            digitCount++;
        } else if (ascii < 48 || (ascii > 57 && ascii < 65) || (ascii > 90 && ascii < 97) || ascii > 122) {
            isOther = true;
        }
    }
    let isValid = true;
    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (isOther) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}


password('Pa$s$s')
