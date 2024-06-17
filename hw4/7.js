function lcm(a,b){
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
    var c = (a * b)/m;
    return c;
}
console.log(lcm(12,10));