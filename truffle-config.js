module.exports={
  networks:{
    migrations_directory: "./migrations",
    development :{
      "host":"127.0.0.1",
      "port":7545,
      "network_id":"*" //match any network id
    }
  },
  solc:{
    opimizer:{
      enabled:true,
      runs:200
    }
  }
}