var city; //variable Declaration
let street;
const pin = 413305;
street = "pune road";
console.log(street);
//pin = "332145"; not allowed

var city; // variable redeclaration
//let street; // variable redclaratio not allowed
if (true) {
    var name = "virat";
    let salary = 5000;
    const runs = 3000;
    console.log(name);

}
//console.log(salary);
function show() {
    var nameofstd = "kiran";
    let salary = 8000;
    const runs = 6000;
}
function display() {
    console.log('inside function');
    let ismarried = true;
    if (ismarried) {
        let greet = "good morning";
        console.log();
    }
    console.log(greet);
}
