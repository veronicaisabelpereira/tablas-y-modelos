
# API REST de Productos con Sequelize, TypeScript y Express

Este proyecto es una pequeña API REST desarrollada con TypeScript y Express que utiliza Sequelize para interactuar con una base de datos y realizar operaciones CRUD (crear, leer, actualizar y borrar) sobre una entidad de productos.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js y npm
- PostgreSQL u otro sistema de gestión de bases de datos compatible con Sequelize

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Instala las dependencias del proyecto:

```bash
cd tu-repositorio
npm install
```

## Configuración

1. Crea una base de datos PostgreSQL en tu sistema local.
2. Copia el archivo `.env.example` y renómbralo a `.env`.
3. En el archivo `.env`, configura las variables de entorno `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST` y `DB_PORT` con los valores correspondientes para tu base de datos.

## Uso

1. Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

2. Una vez que el servidor esté en funcionamiento, puedes hacer solicitudes HTTP a las siguientes rutas:

   - `POST /products`: Crea un nuevo producto enviando un objeto JSON con los campos `precio` y `title`.
   - `GET /products`: Obtiene todos los productos.
   - `GET /products/:productId`: Obtiene un producto específico según su ID.
   - `PATCH /products/:productId`: Modifica un producto existente según su ID.
   - `DELETE /products/:productId`: Elimina un producto según su ID.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Haz tus cambios y commitea (`git commit -am 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está bajo la Licencia [MIT](https://opensource.org/licenses/MIT).
```

Este README proporciona una guía básica para configurar, usar y contribuir a tu proyecto. Recuerda personalizarlo según tus necesidades específicas y agregar cualquier otra información relevante que consideres necesaria.

