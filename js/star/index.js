// for (let i = 1; i <= 5; i++) {
//     let star = ""
//     for (let j = 1; j <= i; j++) {
//         star = star + "*";
//     }
//     console.log(star)
// }

// for (let i = 5; i >= 1; i--) {
//     let star = ""
//     for (let j = 1; j <= i; j++) {
//         star = star + "*";
//     }
//     console.log(star)
// }

let list = [
    {
        name: "sasi",
        age: 28
    },
    {
        name: "maghil",
        age: 3
    },
    {
        name: "mallika",
        age: 50
    },
];

let rows = "";

for (let i = 0; i < list.length; i++) {
    let row =
        `<tr>
        <td>${list[i].name}</td>
        <td>${list[i].age}</td>
    </tr>`;

    rows = rows + row;
}

// the below code will work only when we open with live server index.html
// if we use node index.js, it will not work
document.getElementById("list-body").innerHTML = rows;

console.log(rows);




//   let list1 = [
//     {
//       name: "sanjay",
//       age: 23,
//       skills: ["HTML", "CSS", "JS"]
//     }, {
//       name: "maghil",
//       age: 23,
//       skills: ["dance", "speach", "joke", "singing"]
//     },
//   ]

//   let rowList = "";

//   for (let i = 0; i < list1.length; i++) {
//     let name = list1[i].name;
//     let age = list1[i].age;

//     let skills = "";

//     for (let j = 0; j < list1[i].skills.length; j++) {
//       skills = skills + list1[i].skills[j];
//     }

//     let row = `<tr><td>${name}</td><td>${age}</td><td>${skills}</td></tr>`;

//     rowList = rowList + row;

//   }

  // document.getElementById("tbody").innerHTML = rowList;
