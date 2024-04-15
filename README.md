# API REST de Productos con Sequelize, TypeScript y Express

Este proyecto es una pequeña API REST desarrollada con TypeScript y Express que utiliza Sequelize para interactuar con una base de datos PostgreSQL y realizar operaciones CRUD (crear, leer, actualizar y borrar) sobre una entidad de productos.

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

## Uso

1. Para iniciar el servidor en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

2. Una vez que el servidor esté en funcionamiento, puedes hacer solicitudes HTTP a las siguientes rutas:

   - `GET /products`: Obtiene todos los productos.
   - `POST /product`: Crea un nuevo producto enviando un objeto JSON con los campos `price` y `title`.
   - `GET /product/:id`: Obtiene un producto específico según su ID.
   - `PATCH /product/:id`: Modifica un producto existente según su ID.
   - `DELETE /product/:id`: Elimina un producto según su ID.

## Tecnologías Utilizadas

- ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white): Lenguaje de programación.
- ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white): Framework web para Node.js.
- ![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white): ORM para Node.js.
- ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white): Sistema de gestión de bases de datos relacional.

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

Esto agrega etiquetas coloridas a las tecnologías utilizadas en el proyecto para una mejor visualización. Siéntete libre de ajustar los colores o agregar más tecnologías según sea necesario.
