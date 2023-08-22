var interview = function (gradescore, hscscore, sscscore, name) {
var result = gradescore>=70 || hscscore>=80 || sscscore>=90 ? `congratulations ! ${name} you are welcome for TCS interview`
: `sorry ${name} better luck next time`;
console.log(result);
    
}
interview(99,89,80, `mahi`);
interview(30,20,50, `mahesh`);
interview(90,76,40, `mansi`);
