function shoppingTime(memberId, money) {
  // you can only write your code here!
  // Sepatu brand Stacattu seharga 1500000
  // Baju brand Zoro seharga 500000
  // Baju brand H&N seharga 250000
  // Sweater brand Uniklooh seharga 175000
  // Casing Handphone seharga 50000
  var arr = []

  var priceList = {
    "Stacattu" : 1500000,
    "Zoro" : 500000,
    "H&N" : 250000,
    "Uniklooh" : 175000,
    "Casing" : 50000
  }

  var result = {
    memberId : memberId,
    money : money,
    listPurchased : [],
    changeMoney : 0
  }

  
  if(memberId === '' || (memberId === undefined || money === undefined)){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  } else if (money < 50000) {
    return "mohon maaf, uang tidak cukup"
  } else if (memberId !== '' && money >= 50000){
    for (var i in priceList){
      if(money >= priceList[i]){
        arr.push(i)
        money = money - priceList[i]
      }
    } 
  }

  result.listPurchased = arr
  result.changeMoney = money
  return result
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja