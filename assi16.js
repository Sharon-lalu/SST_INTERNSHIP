const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the first number :\n",(a)=>{
    readline.question("Enter the second number : \n",(b)=>{

        var num1 = parseInt(a);
        var num2 = parseInt(b);

        function average(){
            avg=(num1+num2)/2;
            console.log("The average of two number is : "+avg);
        }
        average();
    readline.close();
    });
});