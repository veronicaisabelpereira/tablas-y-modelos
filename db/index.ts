import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://uvoksjwd:7z_Bbz_ftou_PEqatRRry0AEf34wkaGj@tuffi.db.elephantsql.com/uvoksjwd"
); // Example for postgres
/*
Está importando la clase Sequelize desde el paquete 
"sequelize" y creando una nueva instancia de Sequelize. 
La instancia se está conectando a una base de datos PostgreSQL 
utilizando la cadena de conexión proporcionada.
*/
