// if boolean is used, true is 1, false is 0
let result;
result = `4`- true;
console.log(result); //3
console.log(`why result is 3 cause their is implicit conversion from boolean value true to number value 1`);

result = 4 + true;
console.log(result); //5
console.log(`why result is 5 cause their is implicit conversion from boolean value true to number value 1`);

result = 4+ false;
console.log(result); //4
console.log(`why result is 4 cause their is implicit conversion from boolean value false to number value 0`);
