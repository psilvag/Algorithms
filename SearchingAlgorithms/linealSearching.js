
/** 
 *  La busqueda lineal o secuencial verifica elemento por elemento en la matriz, para encontrar la llave buscada.
 * La complejidad algoritmica es O(n), lineal al tamaño de entrada de la matriz
*/

function search(arr,key){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===key){
            return i
        }
    }
    return -1

}
 const array=[1,5,6,102,567,24,5,6,333,4,56,2,10,4,5,3]
 let Key=333
 const indexKey=search(array,Key)
 
 if(indexKey!=-1){
    console.log(`El valor ${Key} se encuentra en la posicion ${indexKey}`);
 }else{
    console.log("Key no encontrada");
 }