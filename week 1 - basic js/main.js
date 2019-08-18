



// console and devtool from chrome

// console.log('Hello console log');
// console.error('Hello console error');
// console.warn('Hello console warn');

// var, let, const

// let age = 28;
// const name;
// console.log(age);

// data type
// String, Numbers, Boolean, null, undefined, Symbol

// const name = 'Marcus';
// const isMale = true;
// const foo = null;
// const boo = undefined;
// let zoo;
// console.log(typeof foo);
// console.log(typeof boo);
// console.log(typeof zoo);

// Concat
// let name = 'Marcus';
// let age = 28;
// const msg = `My name is ${name}, and i am ${age}.`;
// console.log(msg);

// Some methods
// length
// toUpperCase()
// subString(0, 2)
// split(', ')

// Arrays - variable that hold multiple values
// const arry = [1, '2'];
// arry.push(false);
// arry.unshift('Marcus');
// arry.pop();
// console.log(arry);
// console.log(Array.isArray(arry));
// console.log(arry.indexOf('Marcus'));

// Object
// const person = {
//     firstName: "Marcus",
//     lastName: "Ma",
//     age: 28,
//     hobbies: ['Coding', 'no true', 'Coding'],
//     info: {
//         infoA: 'A'
//     }
// };
// console.log(person);
// console.log(person.hobbies[1]);
// console.log(person.firstName);
// person.email = 'xxxxxx';
// const { firstName } = person;
// console.log(firstName);

// For loop
// const todoList = [
//     {
//         id: 1,
//         title: 'Basic JS for begineer',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         title: 'JS OOP Concept',
//         isCompleted: false
//     },
//     {
//         id: 3,
//         title: 'JS DOM',
//         isCompleted: false
//     }
// ];

// for (let todo of todoList) {
//     console.log(todo);
// }

// forEach, map, filter
// todoList.forEach(function (todo) {
//     console.log(todo);
// });

// const titles = todoList.map(function (todo) {
//     return todo.title;
// });

// const completeds = todoList.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(todo => {
//     return todo.title;
// });


// console.log(titles);
// console.log(completeds);

// Control flow
// let x = 10;
// let y = 13;
// if (x === 10) {
//     console.log('x is equal to 10');
// } else if (x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is less than 10');
// }

// if (x > 10 || y > 13) {

// }

// if (x > 10) {
//     if (y > 13) {

//     }
// }

// const color = (x === 10) ? 'red' : 'blue';

// switch (color) {
//     case 'red':
//         console.log(`Color is red`);
//         break;
// }

// Function
// function add(val1, val2) {
//     return val1 + val2;
// }

// const addVal = (val1, val2) => {
//     return val1 + val2;
// }

// // console.log(`The value is ${add(10, 20)}`);
// console.log(addVal(22, 23));

// Constructor function
// function Person(firstName, lastName, age, date) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.birthdate = new Date(date);
//     // this.getBirthYear = function () {
//     //     return this.birthdate.getFullYear();
//     // }
//     // this.getFullName = function () {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// Person.prototype.getBirthYear = function () {
//     return this.birthdate.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
// class Person {
//     constructor(firstName, lastName, age, date) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.birthdate = new Date(date);
//     }

//     getBirthYear() {
//         return this.birthdate.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Create Instance
// const person1 = new Person('Marcus', 'Ma', 28, '8-14-2019');
// console.log(person1);
// console.log(person1.getFullName());

// DOM
// console.log(window);
// console.log(alert(123));

// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple elememts
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('items'));

// const items = document.querySelectorAll('.item');
// const ul = document.querySelector('.items');

// items.forEach(item => {
//     console.log(item);
// });

// ul.remove(); 
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Marcus';
// ul.children[1].innerText = 'Kristen';
// ul.children[2].innerHTML = `<h1>Andrew</h1>`

// const btn = document.querySelector('.btn');

// btn.style.color = 'red';
// btn.style.background = 'blue';

// btn.addEventListener('click', function (event) {
//     // alert('Click event !');
//     event.preventDefault();

//     // console.log(event);
//     // console.log(event.target);
//     document.querySelector('#my-form').style.background = 'blue';
// });

// const myForm = document.querySelector('#my-form');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const users = document.querySelector('#users');

// myForm.addEventListener('submit', doSubmit);

// function doSubmit(event) {
//     event.preventDefault();

//     console.log(name.value);

//     if (name.value === '' || email.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter value.';

//         setTimeout(() => {
//             msg.remove();
//         }, 1000);
//         return;
//     }

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));

//     users.appendChild(li);


//     name.value = '';
//     email.value = '';
// }