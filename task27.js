const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter your name :\n",(name)=>
{
    readline.question("Enter your age :\n",(age) =>
    {
        function info()
        {    
            console.log("Your name is "+name+" "+"Your age is "+age);
        }
        info();
    readline.close();
    });
});