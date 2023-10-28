document.addEventListener("DOMContentLoaded", function () {
    const generarContratoBtn = document.getElementById("generarContrato");
    const contratoContainer = document.getElementById("contratoContainer");
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const imprimirContratoBtn = document.getElementById("imprimirContrato");

    generarContratoBtn.addEventListener("click", function () {
        // Captura los valores de los campos de entrada
        const vendedorNombre = document.getElementById("nombreVendedor").value;
        const vendedorApellido = document.getElementById("apellidoVendedor").value;
        const vendedorDni = document.getElementById("dniVendedor").value;
        const vendedorDireccion = document.getElementById("direccionVendedor").value;
        const vendedorTelefono = document.getElementById("telefonoVendedor").value;
        const vendedorEmail = document.getElementById("emailVendedor").value;
        const compradorNombre = document.getElementById("nombreComprador").value;
        const compradorApellido = document.getElementById("apellidoComprador").value;
        const compradorDni = document.getElementById("dniComprador").value;
        const compradorDireccion = document.getElementById("direccionComprador").value;
        const compradorTelefono = document.getElementById("telefonoComprador").value;
        const compradorEmail = document.getElementById("emailComprador").value;
        const marcaVehiculo = document.getElementById("vehiculoMarca").value;
        const modeloVehiculo = document.getElementById("vehiculoModelo").value;
        const versionVehiculo = document.getElementById("vehiculoVersion").value;
        const anoVehiculo = document.getElementById("vehiculoAno").value;
        const patenteVehiculo = document.getElementById("vehiculoPatente").value;
        const chasisVehiculo = document.getElementById("vehiculoChasis").value;
        const motorVehiculo = document.getElementById("vehiculoMotor").value;

        // Reemplaza los marcadores de posición en el contrato
        document.getElementById("vendedorNombreCompleto").textContent = vendedorNombre + " " + vendedorApellido;
        document.getElementById("vendedorDni").textContent = vendedorDni;
        document.getElementById("compradorDni").textContent = compradorDni;
        document.getElementById("vendedorDireccion").textContent = vendedorDireccion;
        document.getElementById("vendedorTelefono").textContent = vendedorTelefono;
        document.getElementById("vendedorEmail").textContent = vendedorEmail;
        document.getElementById("compradorNombreCompleto").textContent = compradorNombre + " " + compradorApellido;
        document.getElementById("compradorDireccion").textContent = compradorDireccion;
        document.getElementById("compradorTelefono").textContent = compradorTelefono;
        document.getElementById("compradorEmail").textContent = compradorEmail;

        document.getElementById("marcaVehiculo").textContent = marcaVehiculo;
        document.getElementById("modeloVehiculo").textContent = modeloVehiculo;
        document.getElementById("versionVehiculo").textContent = versionVehiculo;
        document.getElementById("anoVehiculo").textContent = anoVehiculo;
        document.getElementById("patenteVehiculo").textContent = patenteVehiculo;
        document.getElementById("chasisVehiculo").textContent = chasisVehiculo;
        document.getElementById("motorVehiculo").textContent = motorVehiculo;
        document.getElementById('fechaCreacionContrato').textContent = dia+ "/" + mes + "/" + anio;

        // Muestra el contrato y el botón de imprimir
        contratoContainer.style.display = "block";
        imprimirContratoBtn.style.display = "block";

        console.log("marcaVehiculo element:", document.getElementById("marcaVehiculo"));
        console.log("marcaVehiculo value:", marcaVehiculo);
        console.log(dia)

    });

    imprimirContratoBtn.addEventListener("click", function () {
        // Agrega la lógica de impresión aquí
    });
});
