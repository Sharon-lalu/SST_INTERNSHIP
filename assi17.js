const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the length :\n",(l)=>{
    readline.question("Enter the breadth : \n",(b)=>{

        var num1 = parseInt(l);
        var num2 = parseInt(b);

        function area(){
            area=num1*num2;
            console.log("The area of a rectangle : "+area);
        }
        area();
    readline.close();
    });
});