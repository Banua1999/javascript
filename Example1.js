function greet(name, age = "23") {
    console.log(name + " " + "is a exclent girl")
    console.log(age)
}
let name1 = "kousr";
let name2 = "banu"
let age = "22";
greet(name1, age);
greet(name2, age);

// console.log(name1 + " " + "is a good girl");
// console.log(name2 + " " + "is a good girl")
// =======================================================
function sum(a, b) {
    let c = a + b;
    return c;
}
let returnva = sum(4, 4)
console.log(returnva)
    //===========================================================
function grater(e, d) {
    if (e > d) {
        console.log(e + " is grater than" + d)
    } else {
        console.log(e + "is lesser than" + d)
    }
}
grater(4, 6);