function apilar(info){
    if(head === 5){
       console.log("La pila esta llena")
    }else{
        array[head] = info;
        head++;
    }
}

function desapilar(){
    let eliminado;
    
    if(head === 0){
        console.log("La pila esta esta vacia")  
    }else{
        head--;
        eliminado = array[head]
        array[head] = 0;
        console.log("Elemento eliminado exitosamente");
    }
    return eliminado;
}


//declaracion del arreglo que sera nuestra pila
let array = [0 ,0 ,0 ,0 ,0 ]; //arreglo de 5 elementos 

//inicializamos el la cabeza en el primer elemento del arreglo
let head = 0;

//impresion del array
console.log(array);
console.log("el valor de la cabeza es: "+ head);


//Agregamos el valor de 5
apilar(5);
apilar(14);
apilar(200);
apilar(100);

//impresion del array
console.log(array);
console.log("el valor de la cabeza es: "+ head);


apilar(130);

//impresion del array
console.log(array);
console.log("el valor de la cabeza es: "+ head);

//------------------------------------------------------------//

desapilar();
desapilar();
desapilar();
desapilar();
desapilar();


//impresion del array
console.log(array);
console.log("el valor de la cabeza es: "+ head);