function catMeows(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    arr
    .map(line => line.split(' '))
    .map(([name, age]) => new Cat(name, age))
    .forEach(cat => cat.meow());
}

catMeows(['Mellow 2', 'Tom 5']);