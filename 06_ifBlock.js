var num = 23;
if (num>10) {
    console.log(num);
}
console.log(`after if block`);

console.log('--------------------------------------------');

var num = 33;
if (num%2==0) {
    console.log(`${num} is EVEN`);
    
} else {
    console.log(`${num} is ODD`);
    
}
console.log(`----------------------------------------`);

function voteEligibility(age , name) {
    //if block to handle all invalid senarios
    var one = +age;
    if (age<=0 || isNaN(one) || age>120) {
        console.log(` ${name} your age ${age} is invalid`);
        return;
        
    }
if (age>=18) {
    console.log(`${age} you are eligible for voting`);
} else {
    console.log(`${age} sorry you are not eligible for voting`);
}
    
}
voteEligibility(23, "jenny")
voteEligibility(11, "ram")
voteEligibility( -20 , "namita")
voteEligibility("uk", "pooja")
voteEligibility("30", "hari")
voteEligibility(null, "jenny")
voteEligibility(undefined, "monika")
voteEligibility(150, "kishor")