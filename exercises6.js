function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  result = ''
  array = []
  pembanding = 5
  hasil = ''
  
  for(i=0;i<=angka;i++){
    for(j=0;j<=angka;j++){
      if(i*j === angka){
        result = String(i).length + String(j).length
        if(result < pembanding){ 
        pembanding = result
        // console.log(pembanding)
      } 
    }
  }
}
array.push(pembanding)

return array
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2