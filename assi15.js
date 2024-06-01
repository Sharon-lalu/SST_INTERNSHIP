const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter a string :\n",(num1)=>{
    readline.question("Enter a integer : \n",(num2)=>{
        function value(){
            console.log("The string is : "+num1);
            console.log("The integer is : "+num2);
        }
        value();
    readline.close();
    });
});