
//a,e,i,o,u
function vowelCout(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char== 'a' || char== 'e' || char=='i' || char=='o' || char=='u'
        || char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
            console.log(char);
            count = count+1;
        }
          
    }
   console.log(`total number of vowel  count is : ${count}`);
}
vowelCout("I am very good UI Developer");

console.log(`********************************************`);

let sum = function () {
    let totalsum = 0;
for (let index = 1; index <=20; index++) {
    totalsum = totalsum+index;
    
}
console.log(`sum of first 20 numbers is : ${totalsum}`);
}
sum();