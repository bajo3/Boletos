document.addEventListener("DOMContentLoaded", function () {
    const generarContratoBtn = document.getElementById("generarContrato");
    const contratoContainer = document.getElementById("contratoContainer");
    const fecha = new Date();
    const dia = fecha.getDate();
    const mesesEnEspanol = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const mes = mesesEnEspanol[fecha.getMonth()];

    const anio = fecha.getFullYear();
    const imprimirContratoBtn = document.getElementById("imprimirContrato");

    

    generarContratoBtn.addEventListener("click", function () {
        // Captura los valores de los campos de entrada
        const vendedorNombre = document.getElementById("nombreVendedor").value;
        const vendedorApellido = document.getElementById("apellidoVendedor").value;
        const vendedorDni = document.getElementById("dniVendedor").value;
        const vendedorDireccion = document.getElementById("direccionVendedor").value;
        const vendedorTelefono = document.getElementById("telefonoVendedor").value;
        const vendedorLocalidad = document.getElementById("localidadVendedor").value;
        const ventaPrecioElement = document.getElementById("precioVenta");
        const ventaPrecio = Number(ventaPrecioElement.value); 
        const precioFormateado = ventaPrecio.toLocaleString('es-AR'); // 'es-AR' es el código de lenguaje y región para español en Argentina
        const compradorNombre = document.getElementById("nombreComprador").value;
        const compradorApellido = document.getElementById("apellidoComprador").value;
        const compradorDni = document.getElementById("dniComprador").value;
        const compradorDireccion = document.getElementById("direccionComprador").value;
       const compradorTelefono = document.getElementById("telefonoComprador").value;
        const compradorLocalidad = document.getElementById("localidadComprador").value;
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
        document.getElementById("vendedorLocalidad").textContent = vendedorLocalidad;
        document.getElementById("ventaPrecio").textContent = '$' + precioFormateado;
        document.getElementById("compradorNombreCompleto").textContent = compradorNombre + " " + compradorApellido;
        document.getElementById("compradorDireccion").textContent = compradorDireccion;
        document.getElementById("compradorTelefono").textContent = compradorTelefono;
        document.getElementById("compradorLocalidad").textContent = compradorLocalidad;

        document.getElementById("marcaVehiculo").textContent = marcaVehiculo;
        document.getElementById("modeloVehiculo").textContent = modeloVehiculo;
        document.getElementById("versionVehiculo").textContent = versionVehiculo;
        document.getElementById("anoVehiculo").textContent = anoVehiculo;
        document.getElementById("patenteVehiculo").textContent = patenteVehiculo;
        document.getElementById("chasisVehiculo").textContent = chasisVehiculo;
        document.getElementById("motorVehiculo").textContent = motorVehiculo;
        document.getElementById("vendedorNombreCompletoContrato").textContent = vendedorNombre + " " + vendedorApellido;
        document.getElementById("compradorNombreCompletoContrato").textContent = compradorNombre + " " + compradorApellido;


        document.getElementById('dia').textContent = dia;
        document.getElementById('mes').textContent = mes;
        document.getElementById('anio').textContent = anio;

        // Muestra el contrato y el botón de imprimir
        contratoContainer.style.display = "block";
        imprimirContratoBtn.style.display = "block";

        console.log("marcaVehiculo element:", document.getElementById("marcaVehiculo"));
        console.log("marcaVehiculo value:", marcaVehiculo);
        console.log(dia)
        console.log("Valor del nombre del comprador:", compradorNombre);
        console.log("compradorNombre:", compradorNombre);
console.log("compradorApellido:", compradorApellido);


    });

    imprimirContratoBtn.addEventListener("click", () => {
        imprimirContratoBtn.style.display = "none";
      
        const contenidoContrato = contratoContainer.innerHTML;
        const ventanaImpresion = window.open("", "", "width=600,height=600");
      
        ventanaImpresion.document.open();
        ventanaImpresion.document.write(`
          <html>
            <head>
              <title>Contrato</title>
              <style>
                @page {
                  size: auto;
                  margin: 0;
                }
                body {
                  margin: 0;
                }
              </style>
            </head>
            <body>${contenidoContrato}</body>
          </html>
        `);
      
        ventanaImpresion.document.close();
        ventanaImpresion.print();
        ventanaImpresion.close();
      
        imprimirContratoBtn.style.display = "block";
      });
});
