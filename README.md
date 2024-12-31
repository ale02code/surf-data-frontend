# **Surf Data**

Surf Data es una aplicación web diseñada para la gestión de ventas, reservaciones y usuarios.
Combina la potencia de **React** en el frontend, **Tailwind CSS** para el diseño, y **Flask** en el backend,
ofreciendo una solución moderna y escalable.

## 🚀 **Características**

- 📊 Gestión de ventas.
- 🖨️ Generación de PDFs con los detalles de las ventas.
- 🌐 Soporte para múltiples empresas mediante URLs dinámicas.
- 💡 Context API para manejo centralizado del estado.

## 📁 **Estructura del Proyecto**

- `src/api/` – Funciones para manejar la comunicación con la API.
- `src/components/` – Componentes reutilizables que forman partes específicas de la interfaz.
- `src/pages/` – Vistas principales de la aplicación.
- `src/context/` – Archivos relacionados con el manejo del estado global usando Context API.
- `src/design/` – Estilos globales de la aplicación.

## 🛠️ **Instalación**

Sigue estos pasos para ejecutar la aplicación localmente:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/ale02code/surfData-Frontend.git
   ```

2. **Cambia al directorio del proyecto**:

   ```bash
   cd surfData-Frontend
   ```

3. **Instala las dependencias**:

   ```bash
   npm install
   ```

4. **Inicia la aplicación**:

   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en `http://localhost:5173` (o un puerto alternativo en caso de que 5173 esté ocupado).

## 🔧 **Configuración Adicional**

1. **Configura las variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   <!-- REACT_APP_API_URL=https://sales-manager-api.onrender.com -->
   ```

<!-- 2. **Backend**:
   Asegúrate de tener el backend (Flask) configurado y en ejecución. Revisa la documentación en el archivo `docs/backend.md`. -->

## 🧩 **Tecnologías Utilizadas**

- **Frontend**:
  - React
  - Tailwind CSS
  - Vite (para desarrollo rápido)
- **Backend**:
  - Flask
  - PostgreSQL
- **Herramientas**:
  - ESLint y Prettier (para formato y estilo de código)
  - react-router-dom (para manejo de rutas dinámicas)

## 📜 **Licencia**

Este proyecto está licenciado bajo la [MIT License](./LICENSE).

---

## 📫 **Contacto**

¿Tienes preguntas o sugerencias? ¡Contáctame!

- **GitHub**: [ale02code](https://github.com/ale02code)
- **Correo Electrónico**: [chchacon02@gmail.com](mailto:chchacon02@gmail.com)
- **Instagram**: [ale02code](https://www.instagram.com/ale02.code/)
