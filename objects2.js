// const person = {
//     name: 'Nikita',
//     age: 29,
//     weight: 75,
//     job: {
//         exp: 12,
//         spec: 'frontend'
//     },
//     sayHello() {
//         console.log(`Hello from ${this.name}`);
//     }
// }


class Person {
    constructor (name, age) {
this.name = name
this.age = age
this.job = 'frontend'
    }
    sayHello() {
        console.log(this.name + 'say hello!');
    }
    print() {
        console.log(JSON.stringify(this))
    }
}

const person2 = new Person ('Max', 33);
const person3 = new Person ('Kirill', 55);


console.log(person2)

function printObject (object = {}) {
    for (let key in object) {
        if(typeof object[key] !== 'function') {
            console.log('key', key);
            console.log('value', object[key]);
        }
    }
    Object.keys(object).forEach(key => {
        if(typeof object[key] !== 'function') {
            console.log('value', object[key])
        }
    })
} 