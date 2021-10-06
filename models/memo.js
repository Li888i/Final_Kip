const Sequelize = require('sequelize');

module.exports = class Memo extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        memo_text: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        memo_img: {
          type: Sequelize.BLOB,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Memo', //모델네임. 노드프로젝트에서 사용
        tableName: 'memos',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Memo.belongsTo(db.User, {
      foreignKey: 'writer',
      targetKey: 'id',
    });
    db.Memo.hasMany(db.Lecture, {
      foreignKey: 'what_memo',
      targetKey: 'id',
    });
  }
};
