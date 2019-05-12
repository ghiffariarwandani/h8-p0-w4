function cariModus(arr) {
  // you can only write your code here!
  var temp = []

  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            temp.push(arr[i])
        }
    }
  }

  if(temp.length > 1 && temp[0] < temp[1]){
    return temp[0]
  }else if(temp.length > 1 && temp[0] > temp[1]){
    return temp[1]
  }
  if(temp.length == 1){
    return temp[0]
  }
  if(temp.length == 0 || temp[0] == temp[1]){
    return -1
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1