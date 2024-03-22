function isPrime(n){
    for(var i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
function PrintPrime(n){
    for(var i=2;i<=n;i++){
        if(isPrime(i)){
            console.log(i,"isPrime");
        }
    }
}
PrintPrime(100)
