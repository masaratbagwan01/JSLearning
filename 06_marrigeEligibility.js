function marrigeEligibility(gender , age) {
    if (gender=="male" && age>=21) {
        console.log(`you ${age} is eligible for marrige`);
    }
        if (gender=="female" && age>=18) {
            console.log(`your ${age} is eligible for marrige`);
        }
        if (gender=="others" && age<=17) {
            console.log(`sorry ! you ${age}  is not eligible for marrige`);   
        }
       
    }
    
marrigeEligibility("others",4)
console.log(`---------------------------`);
marrigeEligibility("male",55)
console.log(`---------------------------`);
marrigeEligibility("female",28)
console.log(`---------------------------`);
marrigeEligibility("female",28)
console.log(`---------------------------`);
marrigeEligibility("others",5)

