

for (let x=1; x <= 100; x++)
    {
        if (x % 3 && x % 5)
        {
            console.log("Hee Haw!" + "<br>");
        }
        else
        {
            if (x % 3 === 0)
            {
                console.log("Hee!" + "<br>");
            }
            if (x % 5 === 0)
            {
                console.log("Haw!" + "<br>");
            }
            else{
                console.log(x);
            }

        }


    }
