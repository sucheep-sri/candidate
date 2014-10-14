var fibo = [];

for(var i = 0; i <=15; i++){
    if(i == 0){fibo[i] = 0;}
    else if(i == 1){fibo[i] = 1;}
    else {
        fibo.push(fibo[i-1] + fibo[i-2]);
    }
    if(isPrime(fibo[i])) {console.log(fibo[i] + " is prime num");}
}

function isPrime(n)
{
        if(n<2) {return false;}
        var root = parseInt(Math.sqrt(n));
        var result; 
        for(var j =2; j<=root; j++)
        {
            result = n%j;
            if( result == 0)
            {
                return false;
            }
        }
    return true;
}