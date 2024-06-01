const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    });
    
    readline.question("Enter the first number :\n",(x)=>
    {
    readline.question("Enter second number :\n",(y) =>
    {
        const a = parseInt(x);
        const b = parseInt(y);

        function addition(a,b){
            var a;
            var b;
            sum = a+b;
            console.log("Addition : "+sum);
        }
        addition(a,b);

        function subtraction(a,b)
        {
            var a;
            var b;
            sub = a-b;
            console.log("Subtraction :"+sub);
        }
        subtraction(a,b);

        function multiplication(a,b){
            var a;
            var b;
            multi = a*b;
            console.log("Multiplication : "+multi);
        }
        multiplication(a,b);

        function division(a,b)
        {
            var a;
            var b;
            divi = a/b;
            console.log("Division :"+divi);
        }
        division(a,b);

        readline.close();
    });
});