function cariMedian(arr) {
  
  var hasil = 0
  var medianGanjil = 0
  var medianGenap = 0

  if(arr.length % 2 === 1){
    hasil = Math.round(arr.length/2)
    medianGenap = arr[hasil-1]
    return medianGenap
  } else if (arr.length % 2 === 0){
    hasil = arr.length/2
    medianGanjil = (arr[hasil] + arr[hasil-1])/2
    return medianGanjil
  }
  
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5