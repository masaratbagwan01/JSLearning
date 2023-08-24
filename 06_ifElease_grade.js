function voteEligible(age) {
    var one = +age;
    if (age<=0 || isNaN(one) || age>100) {
        console.log(`your ${age} age is invalid`);
        return;
        
    }
    if (age>=18) {
        console.log(`${age} you are eligible for voting`);
    } else {
        console.log(`${age} sorry you are not eligible for voting`);
    }
}
voteEligible(45)
voteEligible(17)
voteEligible(8)
voteEligible(20)
voteEligible(-10)
voteEligible(200)
voteEligible(0)
voteEligible(null)
voteEligible(undefined)