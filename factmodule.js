exports.factorial=function(a)
{
    b=parseInt(a);
    var fact=1;

    for(i=1;i<=b;i++)
    {
        fact=fact*i;
    }
    return fact;
}