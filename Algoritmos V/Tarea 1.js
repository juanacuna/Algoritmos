
function resetarr(arr){
  for(var i=0; i<arr.length; i++){
    if (arr[i]<0){
      arr[i]=0;
    }
  }
  return arr;
}

res = resetarr([4,8,-8,-4,0,-1,1]);
console.log(res);