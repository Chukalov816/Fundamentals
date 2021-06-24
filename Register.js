function solve(input) {
    let list = {};
    for (let line of input) {
        let [system, component, subComponent] = line.split(' | ');
        if (!list.hasOwnProperty(system)) {
            list[system] = {};
        }
        if (!list[system].hasOwnProperty(component)) {
            list[system][component] = [];
        }
        list[system][component].push(subComponent);

    }
    let sortedSystems = Object.keys(list)
        .sort((a, b) => Object.keys(list[b]).length - Object.keys(list[a]).length || a.localeCompare(b));
    sortedSystems.forEach((el) => {
        console.log(el);
        let sortedComponents = Object.keys(list[el])
            .sort((a, b) => Object.keys(list[el][b]).length - Object.keys(list[el][a]).length);
        sortedComponents.forEach((compEl) => {
            console.log(`|||${compEl}`);
            list[el][compEl].forEach((subComponent) => {
                console.log(`||||||${subComponent}`);
            });
        });
    });
}


solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
)