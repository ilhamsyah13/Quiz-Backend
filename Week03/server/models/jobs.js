const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING(35),
      allowNull: true,
      unique: "jobs_job_title_key"
    },
    min_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    max_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jobs_job_title_key",
        unique: true,
        fields: [
          { name: "job_title" },
        ]
      },
      {
        name: "pk_job_id",
        unique: true,
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
};
