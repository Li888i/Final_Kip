const Sequelize = require('sequelize');

module.exports = class Class extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        class_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        class_info: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Class', //모델네임. 노드프로젝트에서 사용
        tableName: 'classes',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Class.belongsTo(db.User, {
      foreignKey: 'myclass',
      targetKey: 'id',
    });
    db.Class.belongsTo(db.Education, {
      foreignKey: 'what_education',
      targetKey: 'id',
    });
    db.Class.hasMany(db.Lecture, {
      foreignKey: 'what_class',
      sourceKey: 'id',
    });
  }
};
