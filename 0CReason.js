var num = 0;
var result = num ==' ' ? "true": "false";
console.log( result);
console.log(`0=='' - result is true space is get converted to number implicitly`);

var num= 0;
var result = num == 0 ? "true" : "false";
console.log(result);
console.log(`0==0 result is true 0 is get converted to string implicitly`);

var num= 0;
var result = num == 10 ? "true" : "false";
console.log(result);
console.log(`0==10 result is false cause it is get converted to string implicitly`);

var num= "null";
var result = num == "undefined" ? "true" : "false";
console.log(result);
console.log(`null==Undefined result is false undefined is get converted to string implicitly`);

var num= 1;
var result = num == [1] ? "true" : "false";
console.log(result);
console.log(`1==[1] result is true [1] is get converted to string implicitly`);

var num= 1;
var result = num == "true" ? "true" : "false";
console.log(result);
console.log(`1==true result is false true is get converted to string implicitly`);

var num= 1;
var result = num == '1' ? "true" : "false";
console.log(result);
console.log(`1=='1' result is true cause '1' is get converted to string implicitly`);
