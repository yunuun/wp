function filter(a, f) {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}
console.log(filter([1, 2, 3, 4, 5], function(x) { return x % 3 != 0; })); 
