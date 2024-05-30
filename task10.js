const num=require("readline").createInterface
({
    input: process.stdin,
    output: process.stdout,
});

num.question("Enter the first number : \n",(a)=>
num.question("Enter the second : \n",(b)=>
{

    const sum=parseInt(a)+parseInt(b);
    const num2=parseInt(a)+parseInt(b);
    console.log("sum of two"+sum+"");
    console.log("a - b = "+a-b);
    console.log("a * b = "+a*b);
    console.log("a / b = "+a/b);
    console.log("a % b = "+a%b);

    num.close();
}));