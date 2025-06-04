$("#formulario").submit(function(event){
    event.preventDefault();
    let nom = $("#nombre").val();
    let ap1 = $("#apellido1").val();
    let ap2 = $("#apellido2").val();
    if(nom.trim() === ""){
        alert("ingrese su nombre");
        event.preventDefault();
        return;
    }
    if(ap1.trim() === ""){
        alert("ingrese su apellido");
        event.preventDefault();
        return;
    }
    alert("Formulario válido. (pero no se envía)");
})
