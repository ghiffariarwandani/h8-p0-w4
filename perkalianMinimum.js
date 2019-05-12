function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var temp = []
  var surga = ''

  for(var i=0;i<=angka;i++){
      surga = ''
    for(var j=0;j<=angka;j++){
        if(i * j == angka){
            surga += i
            surga += j
            temp.push(surga)
        }
    }
  }
  var terpendek = temp[0].length
  
  for(var i=0;i<temp.length;i++){
    if(terpendek > temp[i].length){
        terpendek = temp[i].length
    }
  }
  return terpendek
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2