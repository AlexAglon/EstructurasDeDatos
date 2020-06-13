function recorrer(){
    let actual;
    let siguiente;
    for(let i = 0;i<array.length-1;i++){
        actual = i;
        siguiente = i+1;
        array[actual] = array[siguiente];
    }
    //siguiente = 5
    //ponemos el ultimo elemento en 0
    array[siguiente] = 0;
}

function PUSH(info){
    if(tail === 5){
        console.log("No se pueden agregar mas elementos");
    }else{
        array[tail] = info;
        tail++;
    }
}

function POP(){
    let eliminado;
    if(tail === 0){
        console.log("La cola esta vacia");
    }else{
        eliminado = array[head] 
        recorrer();
        tail--;
    }
    return eliminado;
}

//declaramos el arreglo que sera nuestra cola
let array = [0,0,0,0,0];

//inicioalizamos head y tail
let head = 0;
let tail = 0;

PUSH(23);
PUSH(5);
PUSH(314);
PUSH(316);
PUSH(15);

//console.log(array);
//console.log("el valor de tail es: "+tail);

//------------------------------------------------------------
POP();
//console.log(array);
//console.log("el valor de tail es: "+tail);


array.pop();