function isPrime(n){
    for(var i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
var sum=0;
function PrintPrime(n){
    for(var i=2;i<=n;i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    console.log("sum=",sum);
}
PrintPrime(10)

