const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
 
  // Crear un nuevo usuario
  const usuario = {
    nombre: req.body.nombre,
    password :req.body.password
  };

  // Save User in the database
  Usuario.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


