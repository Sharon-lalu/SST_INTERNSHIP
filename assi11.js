const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
let num1;
let num2;

readline.question("Enter the value of a: \n",(num1)=>{
readline.question("Enter the value of b: \n",(num2)=>{

    let area=num1*num2/2;

    console.log("The area of triangle is :"+area);
    readline.close();
    });
});