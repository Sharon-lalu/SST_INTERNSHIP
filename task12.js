const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter first number :\n",(a)=>
{
    readline.question("Enter the second number :/n",(b) =>{ 
    
        const num1 =parseFloat(a);
        const num2 =parseFloat(b);

        console.log("Initial numbers : num1 =",num1,",num2 =",num2);
    
        console.log("Camparison Operators: ");
        console.log("num1 == num2: ",num1 == num2);
        console.log("num1 != num2 : ",num1 != num2);
        console.log("num1 === num2 : ",num1 === num2);
        console.log("num1 !== num2 : ",num1 !== num2);
        console.log("num1 > num2 : ",num1 > num2);
        console.log("num1 < num2 : ",num1 < num2);
        console.log("num1 >= num2 : ",num1 >= num2);
        console.log("num1 <= num2 : ",num1 <= num2);
    
        readline.close();
    });
});