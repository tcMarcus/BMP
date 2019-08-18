// 1. Explain what different between the double eueal and the triple equal(== vs. ===).
//    You can just write some code.

// 2. Changing all value case to the lower case;
const array = ['Marcus', 'Carisma', 'Maureen', 'Po.C', 'Kristen'];

// 3. Write a function that can return tow values are multiplied by each other.

// 4. Create four person instance and push each to the empty array first.
//    Each person must be an Object, a Constructor Function or a Class, and it contains firstName and lastName field.
//    Help me to set up the brand new field like 'age', giving the value, and print all of the array.


// 5. Modify all uncompleted status of any todo and its details to completed, 
//    and print out the result with console dot log function.
//    You can use basic for loop or higher order function like forEach(), filter();

const todoList = [
    {
        id: 1,
        subject: 'Basic JS for begineer',
        isCompleted: false,
        details: [
            {
                title: 'Introduction of Foor loop and Higher order function.',
                isCompleted: true
            },
            {
                title: 'Introduction of Object, Function, and Class.',
                isCompleted: false
            },
            {
                title: 'Introduction of Javacript DOM.',
                isCompleted: false
            },
            {
                title: 'Build a little Adding User Applicaion.',
                isCompleted: false
            }
        ]
    }
];

// follow these steps
for (let todo of todoList) {

    // find out some subjects that are uncompleted

    // for loop the subjects array

    // for loop the details array of current subject

    // find out the uncompleted item and change its value from false to true

    // if you had changed all uncompleted detail to completed status
    // set the todo status
}

// print the result
