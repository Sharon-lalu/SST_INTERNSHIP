const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the length of rectangle : \n",(a)=>{
    readline.question("Enter the breadth of rectangle : \n",(b)=>{
        const x = parseInt(a);
        const y = parseInt(b);

        function areaRectangle(x,y){
            var x;
            var y;
            area=(x*y);
            console.log("The area of a rectangle is : "+area);
        }
        areaRectangle(x,y);
        readline.close();
    });
});