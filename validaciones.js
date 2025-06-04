function () {
  const formulario = document.getElementById("formulario");

    const nom = document.getElementById("nombre").value;
    const ap1 = document.getElementById("apellido1").value;
    const ap2 = document.getElementById("apellido2").value;

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
