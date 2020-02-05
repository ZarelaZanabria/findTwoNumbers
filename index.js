//Quiero encontrar dos números del array que sumados resulta el número objectivo.
// La función debe retornar un array con los dos números.
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







