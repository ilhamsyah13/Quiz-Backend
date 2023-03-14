const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees_loc', {
    employee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'employees_loc',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "pk_employee_id",
        unique: true,
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
};
