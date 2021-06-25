function loadingBar(percent) {
    let count = percent * 0.1;
    let arr = [];
    for (let i = 0; i < 10; i++) {
        if (i < count) {
            arr.push('%')
        } else {
            arr.push('.')
        }

    }
    if (count == 10) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${percent}% [${arr.join('')}]`);
        console.log('Still loading...');
    }
}


loadingBar(80)