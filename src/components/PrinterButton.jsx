import { useEffect, useRef } from "react";
import PrinterIcon from "../assets/icons/printer.png";

const PrinterButton = ({ venta = [] }) => {
  const today = new Date();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("es-ES", dateOptions);

  useEffect(() => {
    console.log(formattedDate);
  }, []);

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
      <td>${venta.precio}</td>
      <td></td>
      <td></td>
      <td>${venta.precio * venta.cantidad}
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
    <button
      onClick={handlePrint}
      aria-label={`Imprimir venta con ID ${venta.id}`}
    >
      <img src={PrinterIcon} alt="Imprimir" className="w-auto flex gap-2" />
      Print
    </button>
  );
};

export default PrinterButton;
