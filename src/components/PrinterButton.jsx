import { useEffect } from "react";
import PrinterIcon from "../assets/icons/dashboard-icons/printer.svg";

const PrinterButton = ({ venta = [] }) => {
  const today = new Date();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("es-ES", dateOptions);

  useEffect(() => {
    console.log(formattedDate);
  }, []);

  const multi = venta.precio * venta.cantidad;

  const handlePrint = () => {
    if (venta) {
      const printWindow = window.open("", "", "height=600,width=800");
      printWindow.document.open();
      printWindow.document.write(`<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }

    th,
    td {
      padding: 5px;
    }
  </style>
  <title>Factura</title>
</head>

<body>
  <p><b>Cliente:</b> ${venta.nombre}</p>
  <p><b>Dirección:</b> 31 calle poniente, San Salvador</p>
  <p><b>Fecha:</b> ${formattedDate}</p>
  <p><b>Asistente al:</b> 7287-8961</p>
  

  <h2>Sales Report</h2>

  <table>
    <tr>
      <th>CÓDIGO</th>
      <th>CANTIDAD</th>
      <th>DESCRIPCIÓN</th>
      <th>PRECIO UNITARIO</th>
      <th>VTAS NO SUJETAS</th>
      <th>VENTAS EXENTAS</th>
      <th>VENTAS GRAVADAS</th>
    </tr>
    <tr>
      <td>${venta.id}</td>
      <td>${venta.cantidad}</td>
      <td>${venta.producto}</td>
      <td>$ ${venta.precio}</td>
      <td></td>
      <td></td>
      <td>$ ${multi.toFixed(2)}
      </td>
    </tr>
  </table>
</body>

</html>`);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <button className="border border-gray-300" onClick={handlePrint}>
      <img className="h-8" src={PrinterIcon} alt="Imprimir" />
    </button>
  );
};

export default PrinterButton;
