const Sequelize = require('sequelize');

module.exports = class Lecture extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        lecture_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        lecture_info: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        video: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        ot: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Lecture', //모델네임. 노드프로젝트에서 사용
        tableName: 'lectures',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Lecture.belongsTo(db.Class, {
      foreignKey: 'what_class',
      targetKey: 'id',
    });
    db.Lecture.hasMany(db.Review, {
      foreignKey: 'what_lec_review',
      sourceKey: 'id',
    });
    db.Lecture.belongsTo(db.PlayList, {
      foreignKey: 'what_playlist',
      targetKey: 'id',
    });
    db.Lecture.belongsTo(db.Memo, {
      foreignKey: 'what_memo',
      sourceKey: 'id',
    });
    db.Lecture.hasMany(db.Question, {
      foreignKey: 'what_lec_question',
      sourceKey: 'id',
    });
  }
};
