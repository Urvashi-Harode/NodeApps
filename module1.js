exports.factorial=function(a)
{
    var b=parseInt(a);
    var fact=1;
    for(i=1;i<=b;i++)
    {
        fact=fact*i;
    }
    return fact;
}

exports.square=function(a)
{
    var b=parseInt(a);
    var c=b*b;
    return c;
}