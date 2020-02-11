function repetir(arr){
  var arr2=[]
  for(var i=0; i< arr.length; i++){
    arr2.push(arr[i]);
    arr2.push(arr[i]);
  }
  return arr2;
}
res= repetir([2,8,4,1,43]);
console.log(res);