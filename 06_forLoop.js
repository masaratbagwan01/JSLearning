
var num = 10;
var num2 = num++; //post fix
console.log(`value of num is ${num}`);
console.log(`value of num2 is ${num2}`);

var num4 = 10;
var num5 = ++num4; //prefix
console.log(`value of num4 is ${num4}`);
console.log(`value of num5 is ${num5}`);

var num6 = 5;
var num7 = num6--; //postfix
console.log(`value of num6 is ${num6}`);
console.log(`value of num7 is ${num7}`);

var num6 = 5;
var num7 = --num6; //prefix
console.log(`value of num6 is ${num6}`);
console.log(`value of num7 is ${num7}`);




console.log(`==============================================`);
console.log(`0 to 10 number`);
var result = " ";
for (let index = 0; index <= 10 ; index=index+1) {
    result = result.concat(index).concat(" ");
      
}
console.log(result);

console.log(`------------------------------------------------------`);
console.log(`5 to 20 numbers`);
var result = " ";
for (let index = 5; index <=20; index++) {
    result= result.concat(index).concat(" ");    
}
console.log(result); 
console.log(`---------------------------------------------------------`);
console.log(`10 to 1 reverse number`);
var result = " ";
for (let index = 10; index >=1; index--) {
    result = result.concat(index).concat(" ");   
}
console.log(result);
console.log(`-------------------------------------------`);
console.log(`table of 5`);
var result = " ";
 for (let index = 5; index <=50; index=index+5) {
    result = result.concat(index).concat(" "); 
 }
 console.log(result);
 console.log(`********************************************************`);
 console.log(`table of 7 in revers order`);
var result = " ";
 for (let index = 70; index >=7; index=index-7) {
    result = result.concat(index).concat(" "); 
 }
 console.log(result);
 console.log(`-----------------------------------------------`);
 console.log(`first 15 even numbers`);
var result = " ";
 for (let index = 0; index <30; index=index+2) {
    result = result.concat(index).concat(" "); 
 }
 console.log(result);
 console.log(`================================================`);
 console.log(`first 5 odd numbers`);
 var result = " ";
 for (let index = 1; index <10; index=index+2) {
    result = result.concat(index).concat(" ");
 }
   console.log(result);
   /*infinit loop
   for (let index = 10; index >0; index++) {
      console.log(index);
      
   }*/

   console.log(`***************** while *******************`);
   console.log(`number from 1 to 10`);
   var i = 1;
   while (i<=10) {
      console.log(i);
      i++;
   }