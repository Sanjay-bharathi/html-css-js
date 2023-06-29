// Array
{
    let colors = ["red", "green", "blue", "yellow"];

    // array is starting from 0

    colors[2] // blue

    colors.length // 4

    let numbers = [8, 6, 4, 3, 6, 7, 4, 1] // Array

    // length always to staring from 1
    numbers.length // 8

    numbers[4] // 6

    let oddNumber = []; // [3, 7, 1]

    let evenNumbers = []; // [8, 6, 4, 6, 4]

    // i = 0, 0 < 8  => true | number[0] = 8 | 8 % 2 = 0 => even | [8]
    // i = 1, 1 < 8  => true | number[1] = 6 | 6 % 2 = 0 => even | [8, 6]
    // i = 2, 2 < 8  => true | number[2] = 4 | 4 % 2 = 0 => even | [8, 6, 4]
    // i = 3, 3 < 8  => true | number[3] = 3 | 3 % 2 = 1 => odd  | [3]
    // i = 4, 4 < 8  => true | number[4] = 6 | 6 % 2 = 0 => even | [8, 6, 4, 6]
    // i = 5, 5 < 8  => true | number[5] = 7 | 7 % 2 = 1 => odd  | [3, 7]
    // i = 6, 6 < 8  => true | number[6] = 4 | 4 % 2 = 0 => even | [8, 6, 4, 6, 4]
    // i = 7, 7 < 8  => true | number[7] = 1 | 1 % 2 = 1 => odd  | [3, 7, 1]
    // i = 8, 8 < 8  => false ( loop end )

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 == 1) {
            oddNumber.push(numbers[i])
        }

        else if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i])
        }

    }

    let countOdd = []
    let counteven = []
    let eligibleForVoters = []
    for (let i = 1; i <= 100; i++) {

        if (i % 2 == 1) {
            countOdd.push(i)
        } else if (i % 2 == 0) {
            counteven.push(i)
        }

        if (i > 18) {
            eligibleForVoters.push(i)
        }

    }

}

// object
{
    let person = {
        firstName: "sasi",
        lastName: "kala",
        doy: 1995,
        isMarried: true,
        skills: ["html", "css", "js", "bootstrap"]
    }

    person.doy // 1995
    typeof person // object
    typeof person.doy // number

    person.doy = 1996
    person.fullName = `${person.firstName} ${person.lastName}` // sasi kala

    person.hasOwnProperty("doy") // true

    person.hasOwnProperty("gender") // false
}


// array of object


// students[3] // {firstName: "fourth", lastName: "student" }

// // students[0].fullName = students[0].firstName + students[0].lastName;

let students = [
    {
        firstName: "first",
        lastName: "student",
        fullName: "sanjay"
    }, {
        firstName: "second",
        lastName: "student",
    }, {
        firstName: "third",
        lastName: "student",
    }, {
        firstName: "fourth",
        lastName: "student",
    }, {
        firstName: "fifth",
        lastName: "student",
    }
];

function getFullName(person) {

    let firstName = person.firstName; // first
    let lastName = person.lastName; // student
    let fullName = firstName + " " + lastName; // first student

    // let fullName = person.firstName + " " + person.lastName; (mela iruka line ah konjam simple ah panna intha line)

    return fullName; // (first, second, third, fourth, fifth) student

    // return person.firstName + " " + person.lastName; (mela iruka line ah romba romba simple ah panna intha line)
}

for (let i = 0; i < students.length; i++) {

    students[i].fullName = getFullName(students[i]); // getFullName(students[i]) => first student, second student .....
    let rollNumber = i + 1; // 0+1 => 1 | 1+1 = 2 | 2+1 = 3 | ....
    students[i].rollNumber = rollNumber;

}

console.log(students);
// output 
[
    {
        "firstName": "first",
        "lastName": "student",
        "fullName": "first student",
        "rollNumber": 1
    },
    {
        "firstName": "second",
        "lastName": "student",
        "fullName": "second student",
        "rollNumber": 2
    },
    {
        "firstName": "third",
        "lastName": "student",
        "fullName": "third student",
        "rollNumber": 3
    },
    {
        "firstName": "fourth",
        "lastName": "student",
        "fullName": "fourth student",
        "rollNumber": 4
    },
    {
        "firstName": "fifth",
        "lastName": "student",
        "fullName": "fifth student",
        "rollNumber": 5
    }
]