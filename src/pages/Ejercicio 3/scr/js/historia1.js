// Actividad 1 -> Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar


//Pedir que ingresen el monto que tienen

monto = prompt("ingresar el monto que tiene");

//Funcion para convertir a numero, ya que por si solo es un string
monto = parseInt(monto);

if (monto >= 600 && monto < 1000) {
    alert("Comprate el de agua");
    //Forma ineficiente
    vuelto = monto - 600;
    alert("el vuelto es: " + vuelto);
}else if (monto >= 1000 && monto < 1600){
    alert("Comprate el de crema");
    vuelto = monto - 1000;
    alert("el vuelto es: " + vuelto);
}else if (monto >= 1600 && monto < 1700){
    alert("Comprate el heladix");
    //Forma eficiente
    alert("el vuelto es: " + (monto - 1600));
}else if (monto >= 1700 && monto < 1800){
    alert("Comprate el heladovich");
    alert("el vuelto es: " + (monto - 1700));
}else if (monto >= 1800 && monto < 2900){
    alert("Comprate el helardo");
    alert("el vuelto es: " + (monto - 1800));
}else if (monto >= 2900){
    alert("Comprate el cuarto o con confites");
    alert("el vuelto es: " + (monto - 2900));
}else{
    alert("No te alcanza para nada padre");
}

