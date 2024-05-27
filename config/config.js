const Sequelize = require('sequelize')

const sequelize = new Sequelize ('mopartdb','root','',{
    host :'localhost',
    dialect: 'mysql'
})

module.exports = sequelize