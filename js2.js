//David Nagy
//4/7/19
//js2.js
// javascript review assignment 2


for(let i = 1; i <= 100; i++)
{
    // if number can divide by both 3 and 5 then print Hee Haw
    if(i%3 === 0 && i%5 === 0)
    {
        document.write("Hee Haw!"+ "<br>");
    }

    //if number can divide by 5 then print Haw
    else if(i%5 === 0)
    {
        document.write("Haw!"+ "<br>");
    }

    //if number can divide by 4 then print Hee
    else if(i%3 === 0 )
    {
        document.write("Hee!"+ "<br>");
    }

    //if number cannot divide by 3 or 5 then print out the number
    else
    {
        document.write(i+ "<br>");
    }

}