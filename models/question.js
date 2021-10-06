const Sequelize = require('sequelize');

module.exports = class Question extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        question_text: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        question_img: {
          type: Sequelize.BLOB,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Question', //모델네임. 노드프로젝트에서 사용
        tableName: 'questions',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Question.belongsTo(db.User, {
      foreignKey: 'questioner',
      targetKey: 'id',
    });
    db.Question.hasOne(db.Answer, {
      foreignKey: 'what_question',
      sourceKey: 'id',
    });
    db.Question.belongsTo(db.Lecture, {
      foreignKey: 'what_lec_question',
      targetKey: 'id',
    });
  }
};
