function number(num) {
    if (num%2==0) {
        console.log(`given no. ${num} is EVEN`);
    } else {
        console.log(`given no. ${num} is ODD`);
    }
}
number(45)
number(70)
number(67)
number(98)

console.log(`----------------------------------------------`);

var doll = "JavaScript-ES6";
var ill= doll.length;
console.log(`total legth is  ${ill}`);
if (ill>10) {
    console.log(`true : the length of ${doll} is greater than 10`);
    
} else {
    console.log(`false`);
    
}
console.log(`----------------------------------------`);

var java = "javascript language";
var ill= java.startsWith('javascript');
console.log(`true : yes given sentance starts with javascript`);
if (ill==true) {
    console.log(`yes`);
}
else{
    console.log(`no`);
}