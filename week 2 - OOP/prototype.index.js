// // Prototype Chain
// const student = { name: 'Marcus' };
// const magazine = { title: 'Hello Magazine' };
// const cat = { color: 'brown' };

// Object.setPrototypeOf(student, magazine);
// Object.setPrototypeOf(magazine, cat)

// function Student() {
//     this.name = 'Marcus';
//     this.saySomething = function () {
//         return 'Invoke method by this.';
//     }
// };
// Student.prototype.saySomething = function () {
//     return 'Invoke method by proto.';
// }

// // const studentOne = Student(); // Normal function
// const studentTwo = new Student(); // Created by new
// const studentOne = new Student();
// const studentThree = new Student();

// function Book(title, author) {
//     this.title = title;
//     this.author = author;
// }

// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author}.`;
// }

// function Magazine(title, author) {
//     this.title = title;
//     this.author = author;
// }

// // Magazine's proto inherited by Book proto.
// Magazine.prototype = Object.create(Book.prototype);


// const book1 = new Book('Book1', 'Marcus');
// const mag1 = new Magazine('Mag1', 'Maureen');

// // Object.setPrototypeOf(mag1, book1);

// // Extend
// function Person() { }
// Person.prototype.dancing = function () {
//     return 'Dancing....';
// }

// function Student() { }
// Student.prototype = new Person();

// const student1 = new Student();

// // console.log(student1.dancing());

// // Class: The ES6 syntax sugar
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saySomething() {
        return `My name is ${name}.`;
    }

    static compareAge(student1, student2) { // The static method is invoked by the Class not instance.
        return student1.age - student2.age;
    }
}
const student1 = new Student('Marcus', 28);
const student2 = new Student('Allen', 27);

console.log(Student.compareAge(student1, student2));