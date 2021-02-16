module.exports = app => {
    // se genera referencia al archivo controller que implementa las operaciones CRUD
    const userController = require("../controllers/usuarioController.js");
  
    // Se recupera el router del modulo de express
    var  router = require("express").Router();
    
    // Crear un nuevo usuario
    router.post("/usuario", userController.create);
  
    // app.use('/api/users', router);
    return router;
  };