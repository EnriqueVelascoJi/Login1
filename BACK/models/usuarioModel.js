// Se define la representación de la tabla Usuario de la base de datos
// En un objeto Usuario en el contexto del ORM Sequelize

module.exports = (insSequelize, Sequelize) => {
    const Usuario = insSequelize.define("usuario", {
      
      nombre: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Usuario;
  };