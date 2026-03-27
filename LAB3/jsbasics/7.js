// Write a function using rest parameters that accepts any number of 
// arguments and returns their product. 

function product(...n)
{
    let product = 1;
    n.forEach((num) =>
    {
        product = product * num;
    })
    return product;
}