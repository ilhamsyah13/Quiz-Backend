const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations_loc', {
    location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'locations_loc',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "pk_location_id",
        unique: true,
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
