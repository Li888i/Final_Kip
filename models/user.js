const Sequelize = require('sequelize');

module.exports = class User extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: Sequelize.STRING(20), //해쉬 값으로 변경되서 길어지기 때문에 여유롭게!
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(13),
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        birth: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        role: {
          type: Sequelize.STRING(10),
          allowNull: false,
          defaultValue: 'student',
        },
        user_img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'User', //모델네임. 노드프로젝트에서 사용
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.User.hasMany(db.Class, { foreignKey: 'myclass', sourceKey: 'id' });
    db.User.hasMany(db.Review, { foreignKey: 'reviewer', sourceKey: 'id' });
    db.User.hasOne(db.Memo, { foreignKey: 'writer', sourceKey: 'id' });
    db.User.hasOne(db.PlayList, { foreignKey: 'player', sourceKey: 'id' });
    db.User.hasMany(db.Question, {
      foreignKey: 'questioner',
      sourceKey: 'id',
    });
    db.User.hasMany(db.Answer, {
      foreignKey: 'answerer',
      sourceKey: 'id',
    });
  }
};
