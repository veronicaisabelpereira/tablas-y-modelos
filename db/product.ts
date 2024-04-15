import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";
/*
Define un modelo llamado Product utilizando 
la biblioteca Sequelize en un proyecto TypeScript. 
El modelo Product tiene dos propiedades: 
price de tipo entero y title de tipo cadena de texto. 
El modelo se inicializa con las propiedades 
y opciones de configuración proporcionadas,
 incluyendo la conexión a la base de datos a través 
 de la instancia sequelize.


*/
export class Product extends Model {}

Product.init(
  {
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "product",
  }
);
