const db = require("../database/db");
const User = db.define("tb_user", {
  cpf: {
    type: db.Sequelize.DECIMAL,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: db.Sequelize.STRING(20),
    allowNull: false,
  },
  sobrenome: {
    type: db.Sequelize.STRING(50),
    allowNull: false,
  },
  ano: {
    type: db.Sequelize.STRING(10),
    allowNull: false,
  },
  area: {
    type: db.Sequelize.STRING(50),
    allowNull: false,
  },
  curso: {
    type: db.Sequelize.STRING(20),
    allowNull: false,
  },
});

User.sync({ force: true });

module.exports = User;
