const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter a number :\n",(input)=>
{
    let number = parseFloat(input);
    console.log("Initial number : ",number);

    console.log("number++: ",number++);
    console.log("After post increment : ")
});