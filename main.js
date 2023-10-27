document.addEventListener("DOMContentLoaded", function () {
    const generarContratoBtn = document.getElementById("generarContrato");
    const contratoContainer = document.getElementById("contratoContainer");
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
        const marcaVehiculo = document.getElementById("marcaVehiculo").value;
        const modeloVehiculo = document.getElementById("modeloVehiculo").value;
        const versionVehiculo = document.getElementById("versionVehiculo").value;
        const anoVehiculo = document.getElementById("anoVehiculo").value;
        const patenteVehiculo = document.getElementById("patenteVehiculo").value;
        const chasisVehiculo = document.getElementById("chasisVehiculo").value;
        const motorVehiculo = document.getElementById("motorVehiculo").value;

        // Reemplaza los marcadores de posición en el contrato
        document.getElementById("vendedorNombreCompleto").textContent = vendedorNombre + " " + vendedorApellido;
        document.getElementById("vendedorDni").textContent = vendedorDni;
        document.getElementById("compradorDni").textContent = compradorDni;
        document.getElementById("vendedorDireccion").textContent = vendedorDireccion;
        document.getElementById("vendedorTelefono").textContent = vendedorTelefono;
        document.getElementById("vendedorEmail").textContent = vendedorEmail;
        document.getElementById("compradorNombreCompleto").textContent = compradorNombre + " " + compradorApellido;
        document.getElementById("marcaVehiculo").textContent = marcaVehiculo;
        document.getElementById("modeloVehiculo").textContent = modeloVehiculo;
        document.getElementById("versionVehiculo").textContent = versionVehiculo;
        document.getElementById("anoVehiculo").textContent = anoVehiculo;
        document.getElementById("patenteVehiculo").textContent = patenteVehiculo;
        document.getElementById("chasisVehiculo").textContent = chasisVehiculo;
        document.getElementById("motorVehiculo").textContent = motorVehiculo;

        // Muestra el contrato y el botón de imprimir
        contratoContainer.style.display = "block";
        imprimirContratoBtn.style.display = "block";
    });

    imprimirContratoBtn.addEventListener("click", function () {
        // Agrega la lógica de impresión aquí
    });
});
