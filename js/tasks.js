let students = [
    {
        firstName: "first",
        lastName: "student"
    },
    {
        firstName: "second",
        lastName: "student"
    },
    {
        firstName: "third",
        lastName: "student"
    },
    {
        firstName: "fourth",
        lastName: "student"
    },
    {
        firstName: "fifth",
        lastName: "student"
    }
];

function getFullName(student) {
    // student = { firstName: "first", lastName: "student" } for 1 time (because students[0])
    // student = { firstName: "second", lastName: "student" } for 2 time (because students[1])
    // student = { firstName: "third", lastName: "student" } for 3 time (because students[2])
    // student = { firstName: "fourth", lastName: "student" } for 4 time (because students[3])
    // student = { firstName: "fifth", lastName: "student" } for 5 time (because students[4])
    let fullName = student.firstName + " " + student.lastName;
    return fullName;
}

function getFullLength(fullName) {
    return fullName.length
}

for (let i = 0; i < students.length; i++) {

    // students[i].fullName = `${students[i].firstName} ${students[i].lastName}`;

    let fullName = getFullName(students[i]);

    students[i].fullName = fullName;

    students[i].fLength = getFullLength(fullName);

}
// console.log(students);

// prime number logic start

let primeList = []; // list of prime numbers

for (let i = 1; i <= 100; i++) {

    let num = i; // check panna vendiya number

    let isPrime = true; // initial ah true nu irukanum.. epo ithu vagupadutho apotha itha false nu maathanum


    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break; 
            // intha break optional tha, but ean break use panrom apdina.. once oru number divide aagiruchu apdina athu prime,
            // so vera number koda check panna vendiya avasiyam illa
            // for example 8 vanthu 2 aala divide aagi irukum. so namma 3, 4, 5, 6, 7 ithu koda check panna vendiya avasiyam ila
        }
    }

    if (isPrime === true) {

        primeList.push(num) // isPrime true aave iruku apdina. entha number aalayum divide agala nu artham. so ithu oru prime number, namma push paniralam

    }

}

console.log(primeList);

// prime number logic end
