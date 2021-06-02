function xo(str) {
    let x = 1;
    let o = 2;
    let result = '';
    if (x.length == o.length){

        result = 'true'
    }else{
        result = 'false'
    }
    return result;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true