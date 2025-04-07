function guardarVenta() {
    const comercial = document.getElementById('comercial').value;
    const fecha = document.getElementById('fecha').value;
    const lineaProducto = document.getElementById('lineaProducto').value;
    const codigoProducto = document.getElementById('codigoProducto').value;
    const pais = document.getElementById('pais').value;
    const unidades = document.getElementById('unidades').value;
    const precioUnitario = document.getElementById('precioUnitario').value;
    const ventaTotal = document.getElementById('ventaTotal').value;

    if (!comercial || !fecha || !lineaProducto || !codigoProducto || !pais || !unidades || !precioUnitario || !ventaTotal) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = dataTable.insertRow();

    newRow.insertCell(0).textContent = comercial;
    newRow.insertCell(1).textContent = fecha;
    newRow.insertCell(2).textContent = lineaProducto;
    newRow.insertCell(3).textContent = codigoProducto;
    newRow.insertCell(4).textContent = pais;
    newRow.insertCell(5).textContent = unidades;
    newRow.insertCell(6).textContent = precioUnitario;
    newRow.insertCell(7).textContent = ventaTotal;

    document.getElementById('ventaForm').reset();
}

function borrarDatos() {
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    dataTable.innerHTML = ""; // Elimina todas las filas de la tabla
    alert("Todos los datos han sido eliminados.");
}

// Ajustar el formato de fecha al pegar
function ajustarFormatoFecha(inputField) {
    inputField.addEventListener("paste", (event) => {
        event.preventDefault();
        const pastedData = (event.clipboardData || window.clipboardData).getData("text");

        // Detecta y transforma el formato D/M/YYYY o DD/MM/YYYY a YYYY-MM-DD
        const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        if (regex.test(pastedData)) {
            const parts = pastedData.match(regex);
            const day = parts[1].padStart(2, "0"); // Asegura 2 dígitos para el día
            const month = parts[2].padStart(2, "0"); // Asegura 2 dígitos para el mes
            const year = parts[3];
            const formattedDate = `${year}-${month}-${day}`; // Formato YYYY-MM-DD
            inputField.value = formattedDate;
        } else {
            alert("Por favor, pega una fecha en el formato D/M/YYYY o DD/MM/YYYY.");
        }
    });
}

// Llamar la función para el campo de fecha
ajustarFormatoFecha(document.getElementById("fecha"));
