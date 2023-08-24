function gradecalculation(marks) {
    var one = +marks;
    if (marks<=0 || isNaN(one) || marks>100) {
        console.log(`please provide the valid marks`);
    }
    if (marks>=90) {
        console.log(`funtastic marks : ${marks} your grade is A+`);
    }
if (marks>=75 && marks<90) {
    console.log(`Excelent marks ${marks}, your grade is A`);
}
    if (marks>=50 && marks<75) {
        console.log(`good marks ${marks}, your grade is B`);
    } 
        if (marks>=35 && marks<50) {
            console.log(`marks ${marks} is, your grade is C, need improvment`);
        }
    }
    gradecalculation(-7)
gradecalculation(98)
gradecalculation(150)
gradecalculation(80)
gradecalculation(90)
gradecalculation(0)
gradecalculation(35)

gradecalculation(29)
gradecalculation(null)
gradecalculation(64)
gradecalculation(49)
gradecalculation("eighty")
gradecalculation(91)
gradecalculation(undefined)
