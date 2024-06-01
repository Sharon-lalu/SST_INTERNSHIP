const readline = require("readline").createInterface({
input:process.stdin,
output:process.stdout,
});

var x;
var y;

readline.question("Enter the first number :\n",(x)=>
{
readline.question("Enter second number :\n",(y) =>
{
    const a = parseInt(x);
    const b = parseInt(y);
    
    function products(a,b)
    {

        var a;
        var b;
        pro=x*y;
        console.log("The product value is : "+pro);
    }
    products(a,b);
readline.close();
});
});