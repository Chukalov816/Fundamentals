function solve(arr) {
    for (const line of arr) {
        let name = line;
        let personalNum = name.length;
        let employee = {
            name: name,
            personalNum: personalNum
        }
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}


solve([
    'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'
])
