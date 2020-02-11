function inverso(arr){
  var arr2=[]
  for(var i=arr.length-1; i >= 0; i--){
    arr2.push(arr[i]);
  }
  return arr2;
}
res= inverso([2,8,4,1,43,5,7,9,0]);
console.log(res);