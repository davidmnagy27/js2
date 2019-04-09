//David Nagy
//4/7/19
//js2.js
// javascript review assignment 2



for ( var i = 1; i <= 100; i++ )
{
    if ( i%3 === 0 )
    {
        console.log(i+ " Hee" );
    }
    else if ( i%5 === 0 )
    {
        console.log(i+ " “Haw!" );
    }
    else if ( i%3 === 0 && i%5 === 0 )
    {
        console.log( i + " Hee Haw" );
    }
    else
    {
        console.log(i);
    }
}