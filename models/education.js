const Sequelize = require('sequelize');

module.exports = class Education extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        education_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        education_phone: {
          type: Sequelize.STRING(13),
          allowNull: false,
          unique: true,
        },
        education_address: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        education_info: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Education', //모델네임. 노드프로젝트에서 사용
        tableName: 'educations',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Education.hasMany(db.Class, {
      foreignKey: 'what_education',
      sourceKey: 'id',
    });
  }
};
