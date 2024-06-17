function gcd(a,b){
    if(a>b){
        var m = a;
        var n = b;
    }
    else{
        var m = b;
        var n = a;
    }
    while(n !== 0){
        var d = m % n;
        m = n;
        n = d;
    }
    return m;
}
console.log(gcd(18,16))