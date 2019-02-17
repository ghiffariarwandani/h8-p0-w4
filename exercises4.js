function cariModus(arr) {
  var sama = []
  var count
  var result = []
  var cek = []
  var check = true

  for(var i=0;i<arr.length;i++){
    check = true
    var count = 0
    sama = []

    for(var k=0;k<cek.length;k++){
      if(cek[k] === arr[i]){
        check = false
      }
    }
    
    if(check){
      for(var j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
        count++
        }
      }
      cek.push(arr[i])
      sama.push(arr[i], count)
      result.push(sama)
      check = false;
    }
    
  }

  for(var l=0;l<result.length;l++){
    for(var m=0;m<result.length-1;m++){
      if(result[m][1] < result[m+1][1]){
        temp = result[m]
        result[m] = result[m+1]
        result[m+1] = temp
      }
    }
  }

  if(result.length === arr.length){
    return -1
  } else if(result.length === 1){
    return -1
  } else {
    return result[0][0]
  }
  // console.log(result)
  
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4,])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1