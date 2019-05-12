function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var kecil = 'abcdefghijklmnopqrstuvwxyz'
  var result = ''

  for(var i=0;i<kalimat.length;i++){
    for(var j=0;j<besar.length;j++){
        if(kalimat[i] == besar[j]){
            result += kecil[j]
            break
        }
        else if(kalimat[i] == kecil[j]){
            result += besar[j]
            break
        }
        else if(kalimat[i] == ' '){
            result += kalimat[i]
            break 
        }else{
            result += kalimat[i]
            break
        }
    }
  }
  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"