module.exports = {
    HOST: "127.0.0.1",
    PORT:"3306",
    USER: "root",
    PASSWORD: "Quique087",
    DB: "users",
    dialect: "mysql",
    pool: {
      /*
        max: maximum number of connection in pool
        min: minimum number of connection in pool
        idle: maximum time, in milliseconds, that a connection can be idle before being released
        acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
      */  
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    loggin: true
  };