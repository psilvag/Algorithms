
/**
 * La busqueda linel con centinela reduce la verificacion de elementos en la matriz, ya que evita una verificacion condicional al final del array.
 * Este algoritmo añade un valor centinela al final de la matriz, por lo general este valor es igual a la llave buscada en el array
 */


  function searchCentinel(arr,key){
     const valorCentinel=key
     arr.push(valorCentinel)
     let indice=0
     while(arr[indice]!=key){
        indice++
     }
     if(indice===arr.length-1){
        return -1
     }
        return indice
     
  }

  const array=[1,5,6,102,567,24,5,6,333,4,56,2,10,4,5,3]
  let Key=9
  const indexKey=searchCentinel(array,Key)
  
  if(indexKey!=-1){
     console.log(`El valor ${Key} se encuentra en la posicion ${indexKey}`);
  }else{
     console.log("Key no encontrada");
  }