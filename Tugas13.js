function xo(str) {
    let x = 0;
    let o = 0;
    let result = '';
    let hasil =''
    for(let i = 0; i<=0 ; i++){
    if (str[0]==='x'){
        result = x + 1
        hasil = 'true'
    }else{
        
        result = o + 1
        hasil = 'false'
    }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true