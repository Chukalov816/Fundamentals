function solve(arr){
    class Cat{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        matspisspiss(){
            console.log(`${this.name}, age ${this.age} says Meow` );
        }
    }

    for (const element of arr) {
        let[name,age]=element.split(' ');
        let cat=new Cat(name,age);
        cat.matspisspiss()
    }
}

solve(['Mellow 2', 'Tom 5'])