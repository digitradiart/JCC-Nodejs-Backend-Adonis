/*Soal No. 2 (Shopping Time)
Problem

Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberIddan parameter ke-2 merupakan value uang (money) yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

 
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
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja */

function shoppingTime(memberId, money) {
  var listItem = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000,
  };
  var listPurchased = [];
  var totalPurchase = {};

  if (memberId === undefined || memberId === 0 || memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja ';
  } else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  } else {
    // Menghitung changeMoney dan push array daftar item yang dibeli
    var changeMoney = money;
    if (changeMoney >= listItem['Sepatu Stacattu']) {
      changeMoney -= listItem['Sepatu Stacattu'];
      listPurchased.push('Sepatu Stacattu');
    }
    if (changeMoney >= listItem['Baju Zoro']) {
      changeMoney -= listItem['Baju Zoro'];
      listPurchased.push('Baju Zoro');
    }
    if (changeMoney >= listItem['Baju H&N']) {
      changeMoney -= listItem['Baju H&N'];
      listPurchased.push('Baju H&N');
    }
    if (changeMoney >= listItem['Sweater Uniklooh']) {
      changeMoney -= listItem['Sweater Uniklooh'];
      listPurchased.push('Sweater Uniklooh');
    }
    if (changeMoney >= listItem['Casing Handphone']) {
      changeMoney -= listItem['Casing Handphone'];
      listPurchased.push('Casing Handphone');
    }
    // Deklarasi Object
    totalPurchase.memberId = memberId;
    totalPurchase.money = money;
    totalPurchase.listPurchased = listPurchased;
    totalPurchase.changeMoney = changeMoney;
    return totalPurchase;
  }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
