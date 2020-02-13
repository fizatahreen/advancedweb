/*let a,b
function add(a,b)
{
     console.log(a+b)
}
add(2,6)*/



var main=function()
{
    for (var x=0;x<5;x++)
    {
        console.log(x)

    }
    console.log("x can be accessede outside the block scope x value is: "+x);
    console.log("x is hoisted to the function scope");

}
main();
