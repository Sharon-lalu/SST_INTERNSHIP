const readline = require("readline").createInterface
({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Who are you? \n",(name)=>
{
    readline.question("How old are you? \n",(age)=>
    {
        console.log("Hey there "+ name +"!");
        console.log("I am "+ age +"!");
        readline.close();
    });
});