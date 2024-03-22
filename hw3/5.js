function vectorAdd(v1,v2){
    var result=[];
    result[0]=v1[0]+v2[0];
    result[1]=v1[1]+v2[1];
    return result;
}
var v1=[1,2];
var v2=[2,3];
var resultv=vectorAdd(v1,v2);
console.log("resultvector",resultv);