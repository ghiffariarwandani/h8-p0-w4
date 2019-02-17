function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []

    for(var i=0;i<arrPenumpang.length;i++){
      var isiResult = {}
      // if(arrPenumpang[i] !== undefined){
        isiResult.penumpang = arrPenumpang[i][0]
        isiResult.naikDari = arrPenumpang[i][1]
        isiResult.tujuan = arrPenumpang[i][2]

        for(var j=0;j<rute.length;j++){
          if(rute[j] === arrPenumpang[i][1]){
            awal = j
          } else if(rute[j] === arrPenumpang[i][2]){
            akhir = j
          } 
        }

        isiResult.bayar = (akhir-awal) * 2000 
      

        result.push(isiResult)
    }      

  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]