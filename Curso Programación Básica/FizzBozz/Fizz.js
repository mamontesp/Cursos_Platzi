for (i=1; i<=100; i++)
{
    if(i%3==0)
    {
        document.write("Fizz");
    }

    if(i%5==0)
    {
        document.write("Bozz");
    } 
    
    if (i%3!=0 && i%5!=0)
    {
        document.write(i);
    }
    
    document.write("<br /br>");
}