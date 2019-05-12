function urutkanAbjad(str) {
  // you can only write your code here!
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var temp = []
  var sim = 0
  var result = ''

  for(var i=0;i<str.length;i++){
    for(var j=0;j<abjad.length;j++){
        if(str[i] == abjad[j]){
            temp.push(j)
        }
    }
  }
  for(var i=0;i<temp.length;i++){
    for(var j=0;j<temp.length;j++){
        if(temp[j] > temp[j+1]){
            sim = temp[j]
            temp[j] = temp[j+1]
            temp[j+1] = sim
        }
    }
  }
  
  for(var i=0;i<temp.length;i++){
    for(var j=0;j<abjad.length;j++){
        if(temp[i] == j){
            result += abjad[j]
        }
    }
  }
  return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'