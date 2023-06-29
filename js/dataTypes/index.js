// String
{
    let myName = "sasi";

    // note it will not change the origial value

    myName // sasi

    myName + "kala" // sasikala

    myName + "" + "kala" // sasikala

    myName + " " + "kala" // sasi kala

    myName.length // 4

    myName.charAt(3) // i //  myName[3]     

    myName.replace("i", "y") // sasy

    console.log('myName ->', myName);                 //sasi
    console.log('typeof myName ->', typeof myName);   //string

    // this will change the original value (because we are using = operator to assign)
    myName = myName + " " + "kala" // sasi kala (this will save to myName variable)
    console.log('myName ->', myName); //sasi kala
    console.log("split the string at empty space->", myName.split(" ")); //["sasi", "kala"]

    myName.split("") // ["s","a","s","i"," ","k","a","l","a"] empty string um varum

    myName.includes("z") // false
    myName.includes("a") // true

    myName.indexOf("l") // 7
    myName.indexOf("a") // 1
    myName.lastIndexOf("a") // 8 ithu last la irukara first a matum tha varum

    myName.search('z') //-1
    myName.search('k') //5
    myName.toUpperCase() // SASI KALA
}

// Numbers
{
    let age = 24;
    const yearOfBirth = 1999;
    const pi = 3.14

    // these actions will not change original value
    age + 6 // 30

    yearOfBirth + 1 // 2000

    parseInt(pi) // 3

    parseFloat(pi) // 3.14

    age.toFixed(2) // 24.00

    pi.toFixed(3) // 3.140

    pi.toString() // "3.14"

    typeof age // number
    typeof pi // number
    typeof yearOfBirth // number

    typeof pi.toString() // string

    // these actions will change original value

    age = 28;

    age = age + 2 // 30


}

// boolean
{
    let isMarried = true;
    let age = 24;
    const isMale = true;
    isMale =false; // this will throw an error

    let isEligibleForVoting;

    // read 
    isMarried // true

    // update
    isMarried = false;

    isEligibleForVoting = age > 18 // (age > 18) this is true so the return value will assign to the variable

    console.log('isEligibleForVoting->', isEligibleForVoting); // true

}

//undefined

var mark ;  //undefined
 let mark = undefined ;  //undefined

 typeof mark; //  "undefined"
 typeof xyz; //  "undefined"

 //null
 let chess = null
 typeof chess //object