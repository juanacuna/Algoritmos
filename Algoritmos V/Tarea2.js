var res=0;
function inverso(arr){
  for(var i=0; i < arr.length; i++){
    if (i > 0 && i <= arr.length-1){
      arr[i-1]=arr[i];
    }
    if (i==arr.length-1){
         arr[i]=0;
    }
  }
  return arr;
}
res= inverso([2,8,4,1,43]);
console.log(res);