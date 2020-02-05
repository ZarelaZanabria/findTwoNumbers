//Quiero encontrar dos sumeros del array que sumados 
// es igual al parametro sumaNumber
// QUIERO OBTENER [4,5]

let arrNumber = [1, 3, 4, 5];


function sumaFindTwoNumber(arrs, sumaNumber) {
for (let i = 0; i < arrs.length; i++) {
 for (let j = 1; j< arrs.length; j++){
   if(arrs[i] + arrs[j] == sumaNumber) {
     return [arrs[i],arrs[j]]
   }
 }  
}
 

}

sumaFindTwoNumber(arrNumber, 9)







