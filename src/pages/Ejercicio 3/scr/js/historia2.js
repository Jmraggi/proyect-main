// Crear funcion para el tema de la edad

// let free = false;

// const entrada = (hora) => {   
//     let edad = prompt("Que edad tenes?")
//         if (edad >= 18){
//             if (hora >= 2 && hora < 7 && free == false){
//                 alert(`son las ${hora}, podes pasar gratis`);   
//                 free = true;
//             }else{
//                 alert(`son las ${hora}, podes pasar pero tenes que pagar`);
//             }
//         }else{
//             alert("Mira genio, esta imposible que pases, sos menor de edad");
//         }
// }

                         




// /*================================================================================================================================================= 
//  ===========================================================>APUNTES Y RESUMEN<====================================================================
//  ================================================================================================================================================= */

//  /* =================================================================>ARRAYS<======================================================================*/

//  /* Ejemplo vida real:

//  Tengo una caja con muchas bolsitas de diferentes tes, que caracteristicas tienen cada bolsita?
// Tienen un nombre (La virginia, lipton, taragui), un tipo diferente (te rojo, tilo, boldo), una posicion (En programacion siempre se arranca de 0)

//    En sintesis los arreglos son CONTENEDORES con diversos datos.
// */

//  document.write("<b>EJEMPLO DE ARRAYS ASOCIATIVA</b> <br><br>") 

//  let pc1 = {
//      nombre: "Mi PC",
//      procesador: "I7",
//      ram: "16GB",
//      espacio: "1TB",
//  };

//  /*Se debe declarar el arrays sino no puedo señalizarlo como esta abajo*/
//  let nombre = pc1["nombre"];
//  let procesador = pc1["procesador"];
//  let ram = pc1["ram"];
//  let espacio = pc1["espacio"];

//  /* La forma correcta de mostrar por pantalla PERO SI O SI TENGO QUE SEÑALIZARLO PREVIAMENTE (como muestro arriba*)*/
//  frase = `el nombre es: ${nombre}<br>
//           el procesador es: ${procesador}<br>
//           la ram es: ${ram}<br>
//           el espacio es: ${espacio}`;

//  document.write(frase);



//  /* =========================================================>BUCLES E INTERACIONES<===============================================================*/

// /* El bucle se repite constantemente, a diferencia del if que se ejecuta una sola vez.
//   De igual manera comparten la estructura logica, en la cual si pasa esto ejecuto lo otro
//   ->OJO QUE PUEDEN CREARCE BUCLES INFINITOS
// */

// document.write("<b>EJEMPLO DE BUCLES WHILE Y DO-WHILE</b> <br><br>");

// let numero = 0;

// /*Se ejecuta el codigo hasta que el numero se cumple la condicion usando el contador (numero++)*/
// while (numero <= 6) {
//     numero++;
//     document.write(numero + "<br>");
// }

// /*DO-WHILE: Do primero se hace, y despues se pregunta*/

// do{
//     numero++;
//     document.write(numero + "<br>");
// }while(numero <= 6);



// document.write("<b>EJEMPLO DE BREAK</b> <br><br>");

// let numero = 0;

// while(numero < 1000) {
//     numero ++
//     document.write(numero);
//     if (numero == 10){
//         break;                                       //Break permite TERMINAR EJECUTAR EL BUCLE
//     }
// }


// document.write("<b>EJEMPLO DE FOR</b> <br><br>");

// /*El for se compone de DECLARACIONES, INIZIALIZACIONES e ITERAMOS*/

// for (let i = 0; i <= 10; i++) {
//     document.write(i + "<br>");
// } 

// document.write("<b>EJEMPLO DE FOR IN></b> <br><br>");

// let animales = ["gato","perro","loro"];

// for(animal in animales){                             //DEVUELVE LA POSICION O EL INDICE DEL ARRAY DEL ARRAY
//     document.write(animal + "<br>"); 
// }
//     document.write("<br>");

// for(animal of animales){                             //DEVUELVE EL CONTENIDO DEL ELEMENTO DEL ARRAY
//     document.write(animal + "<br>");
// }


// /*Forma de recorrer for con LABEL*/

// array1=["maría","josefa","roberta"];
// array2=["pedro","marcelo",array1,"juan"];


// forLABEL:                                            //Es lo que ejecuta el FOR PRIMERO
// for(let array in array2){                            //Recorro el primer array
//     if(array == 2){                                  //En caso de que estemos en la posicion 2, vamos a recorrer otro arrays (lo de abajo)
//         for(let array of array1){ 
//             break forLABEL;                          //De esta manera lo corta en el 2 porque tengo el forLABEL arriba (saltea el grupo completo)
//             document.write(array + "<br>");
//        }
//     }else{
//         document.write(array2[array] + "<br>")
//     }
// }


//  /* =============================================================>FUNCIONES<=======================================================================*/

// /* Se utiliza funciones para reutilizar el codigo, es escribir un codigo y llamando a la funcion podes volver a utilizarlo
//   EJ: Hacemos una funcion saludar y cada vez que quiero saludar, en vez de escribir el codigo, llamas a la funcion.
// */


// function saludar(){
//     alert("hola");                                   //Esto es lo que hace la funcion
//     return 3;                                        // Esto es lo que retorna, y hace finalizar la funcion (es = al break)
// }
// let saludo = saludar();

// document.write(saludo)



// document.write("<b>EJEMPLO DE PARAMETROS</b> <br><br>");

// /* Se utiliza los parametros para una funcion pasarle diferentes parametros y reutilizarla constantemente
//    EJ: Se puede utilizar de esta manera o como esta abajo (POR PARAMETROS ES ABAJO)
//    function suma (){
//    num1 = 12
//    num2 = 32
//    let res = num1+num2;
//    document.write(res);
//     }
// */

// function suma (num1,num2){
//     let res = num1+num2;
//     document.write(res);
//     document.write("<br>")
// }
// suma(12,32)
// suma(22,55)

//  <<<let es LOCAL, var es GLOBAL (Para declarar una variable y ver el tema del scope)>>>

// function saludar(nombre){
//     let frase=`¡Hola ${nombre}! ¿Como estas?`;       // ${nombre} es lo que paso por parametros, y para poder concatenar una variable debo utilizar ${}.
//     document.write(frase)
// }
// saludar("Juan")


//  <<<funciones flechas>>>

// const saludar = (nombre) => {                           //El function se comvierte en una flechita 
//     let frase=`¡Hola ${nombre}! ¿Como estas?`; 
//     document.write(frase)
// }
// saludar("Juan")



// // entrada(4);                                              //Aca le paso por parametros la hora de entrada



// //PROBLEMA B

// let cantidad = 1
// let alumnosTotales=[];

// for(i=0; i<cantidad; i++){
//     alumnosTotales[i]=[prompt("Nombre del alumno" + (i+1)),0];
// }
// const tomarAsistencia=(nombre,p)=>{
//     let presencia=prompt(nombre);
//     if(presencia =="p"|| presencia =="P"){
//         alumnosTotales[p][1]++;
//    }
// }
// for(i=0;i<30;i++){
//     for (alumno in alumnosTotales){
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//     Asistencias: ${alumnosTotales[alumno[1]]} <br>
//     Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}
//     `;
//     if (30 - alumnosTotales[alumno][1] > 18){
//         resultado += "REPROBADO POR INASISTENCIAS<br><br>";
//     }else{
//         resultado *= "<br><br>";
//     }
//     document.write(resultado);

//     }




// let alumnosTotales=[];

// for(i=0; i<cantidad; i++){
//     alumnosTotales[i]=[prompt("Nombre del alumno" + (i+1)),0];
// }
// const tomarAsistencia = (nombre,p)=>{
//     let presencia=prompt(nombre);
//     if(presencia =="p"|| presencia =="P"){
//         alumnosTotales[p][1]++;
//    }
// }
// for(i=0;i<30;i++){
//     for (alumno in alumnosTotales){
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//     Asistencias: ${alumnosTotales[alumno[1]]} <br>
//     Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}
//     `;
//     if (30 - alumnosTotales[alumno][1] > 18){
//         resultado += "REPROBADO POR INASISTENCIAS<br><br>";
//     }else{
//         resultado *= "<br><br>";
//     }
//     document.write(resultado);

//     }  