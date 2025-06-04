function () {
  const formulario = document.getElementById("formulario");

    const nom = document.getElementById("nombre").value.trim();
    const ap1 = document.getElementById("apellido1").value.trim();
    const ap2 = document.getElementById("apellido2").value.trim(); 

    if (nom === "") {
      alert("Ingrese su nombre");
      return;
    }

    if (ap1 === "") {
      alert("Ingrese su apellido");
      return;
    }

    alert("Formulario válido. (pero no se envía)");
  });
}
