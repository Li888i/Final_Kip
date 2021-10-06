const Sequelize = require('sequelize');

module.exports = class Answer extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        answer_text: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        answer_img: {
          type: Sequelize.BLOB,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Answer', //모델네임. 노드프로젝트에서 사용
        tableName: 'answers',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Answer.belongsTo(db.User, {
      foreignKey: 'answerer',
      targetKey: 'id',
    });
    db.Answer.belongsTo(db.Question, {
      foreignKey: 'what_question',
      targetKey: 'id',
    });
  }
};
