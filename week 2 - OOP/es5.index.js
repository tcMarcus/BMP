/**
 * Basic Object
 */

// Object.property
// Object.method

// const bookOne = {
//     title: 'Booooook one',
//     author: "Marcus",
//     year: 2019,
//     getSummary: function () {
//         return `${this.title} is written by ${this.author} at ${this.year}`;
//     }
// };
// const bookTwo = {
//     title: 'Booooook two',
//     author: "Marcus",
//     year: 2020,
//     getSummary: function () {
//         return `${this.title} is written by ${this.author} at ${this.year}`;
//     }
// };

/**
 * Constructor
 */
// Book
function Book(title, author, year) {
    // console.log('Initialize book');
    this.title = title;
    this.author = author;
    this.year = year;
};

// Get Summary
Book.prototype.getSummary = function () {
    return `${this.title} is written by ${this.author} at ${this.year}`;
}

// Get Age
Book.prototype.getAge = function () {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old.`;
}

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Magazine
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Use magazine constructor
Magazine.prototype.constructor = Magazine;

// Book Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} is written by ${this.author} at ${this.year}`;
    },
    getAge: function () {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old.`;
    },
    revise: function (newYear) {
        this.year = newYear;
        this.revised = true
    }
}

// const book1 = Object.create(bookProtos);
// book1.title = 'book1';
// book1.author = 'Marcus';
// book1.year = 2020;

const book1 = Object.create(bookProtos, {
    title: { value: 'book1' },
    author: { value: 'Marcus' },
    year: { value: 2010 }
});
