import {Sequelize} from 'sequelize'

// con esto conecto la base de datos
const db = new Sequelize('node', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
  
  })

  export default db