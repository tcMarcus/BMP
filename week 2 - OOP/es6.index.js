class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} at ${this.year}`;
    }

    getAge() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old.`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true
    }
}

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// const bookOne = new Book('booke one', 'Marcus', 2003);
const magazineOne = new Magazine('Mag one', 'Marcus', 2002, 'July');

console.log(magazineOne);
console.log(magazineOne.getSummary());