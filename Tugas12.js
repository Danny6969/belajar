function konversiMenit(menit) {
    let result =''
    let result2 = ''
    let hasil =''
    result = Math.floor (menit / 60);
    result2 = Math.floor (menit % 60);
    if (result2<10){
      hasil =result + ':0' + result2
    }else{
      hasil =result + ':' + result2
    }

    return hasil;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00