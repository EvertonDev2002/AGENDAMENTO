const Sequelize = require("sequelize")
const sequelize = new Sequelize('agendamento','postgres','123',{
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
})

module.exports = sequelize