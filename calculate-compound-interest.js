function calculate()
{
    p = document.getElementById("p").value; // princible..
    n = document.getElementById("n").value; // no. of years..
    q = document.getElementById("q").value; // no. of compoundings per year Or no. of periods per year..
    i = document.getElementById("i").value; // interest rate..
    result = document.getElementById("result"); //result..

    // The original equation is A = P (1+[i/q]) ^nq
    // The equation is A = p * Math.pow * [[1 + (i/q)] ^ nq]
    A = (p* Math.pow((1 + (i/(q*100))), (n*q)));
    // toFixed is used for rounding the amount with two decimal.
    result.innerHTML = "The total amount is " + A.toFixed(2);

    result.innerHTML += "<br> The interest is " + (A.toFixed(2) - p).toFixed(2);

}
