var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(){
let result = 'Nama saya ' + name + ',umur saya ' + age + ' tahun,' + 'alamat saya di ' + address + ' dan saya punya hobby ' + hobby ;
return result;

}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence)

