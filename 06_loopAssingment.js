let sum = function () {
    let totalsum = 0;
for (let index = 1; index <=5; index++) {
    totalsum = totalsum+index*index*index;
    
}
console.log(`sum of cube of 1 to 5 number is  : ${totalsum}`);
}
sum()
console.log(`**************************************`);
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
vowelCout("I am very good IT Developer");

console.log(`********************************************`);
function oddPositionChars(str) {
    let index = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char== 'a' || char== 'e' || char=='i' || char=='o' || char=='u'
        || char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
            console.log(char);
        }
        if (index%2!=0 && char!= ' ') {
        
        }
    }
    const char = str.charAt(index);
    
}
oddPositionChars("Hard work always pays back");

function oddPositionChars(str) {
    let index = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char== 'a' || char== 'e' || char=='i' || char=='o' || char=='u'
        || char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
            console.log(char);
        }
        if (index%2!=0 && char!= ' ') {
        
        }
    }
    const char = str.charAt(index);
    
}
oddPositionChars("soon i will be angular IT champ")
