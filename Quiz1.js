// const input = 'gajah'
// let result = ''
// for (let i=input.length-1; i >= 0; i--){
//     result += input[i]
// }


// console.log(result) //hajag
//pokoknya hasil result itu kebalikan dari input

//===================================================================

function balikkata(input){
    let result = ''
    for (let i=input.length-1; i >= 0; i--){
        result += input[i]
    } 
    return result;
}
console.log(balikkata('gajah'));

//==================================================


