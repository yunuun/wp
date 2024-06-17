function arraymin(a){
    var min = a[0];
    for(var i = 1;i < a.length;i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min;
}
console.log("min=",arraymin([5,8,6,3]));