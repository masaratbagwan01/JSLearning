// nan = not a number

var num1 = 0;
var num2 = 0;
var result = num1 / num2;
console.log(result);

var num3 = "100";
console.log(`type of num 3 is : ${typeof num3}`);
var result = +num3;
console.log(`type of num 3 is : ${typeof result}`);
console.log(`----------------------------------------------------`);
var num4 = "gk";
var resulth = +num4;
console.log(`type of result is : ${resulth}`);
console.log(`type of result is : ${typeof resulth}`);

console.log(`----------------------------Implicit conversion----------------------------`);
var result = `5` + 6;
console.log(result);// here 5 and 6 get concat

var result = `80` + true;
console.log(result);
console.log(`why result is 80true cause there is as true.implicit conversion from boolien value
 i.e. true to stream thats why we gt result `);

 console.log(`----------------------explicit conversion-----------------------------`);
 var num = `22`;
 var result = +num ;
 console.log(`result is ${result} and its type is : ${typeof result}`);

  console.log(`seond way of string to number explicit conversion`);
  var result = Number(num);
  console.log(`result is : ${result} and its type is ${ typeof result}`);

  var num = 100;
  console.log(`value of num : ${num} and its type is : ${typeof result}`);

  var num = 100;
  var re = Boolean(num);
  console.log(`value of num : ${re} and its type is : ${typeof re}`);
  console.log(`-----------------------------------------------------------`);

  var num = "50";
  var result = Boolean(num);
  console.log(`value of num : ${result} and its type is : ${typeof result}`);
  
var isMarried = true;
var result= String(isMarried);
console.log(`result is : ${result} and its type is : ${typeof result}`);



