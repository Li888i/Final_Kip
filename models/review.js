const Sequelize = require('sequelize');

module.exports = class Review extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        review_text: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        review_img: {
          type: Sequelize.BLOB,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'Review', //모델네임. 노드프로젝트에서 사용
        tableName: 'reviews',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.Review.belongsTo(db.User, {
      foreignKey: 'reviewer',
      targetKey: 'id',
    });
    db.Review.belongsTo(db.Lecture, {
      foreignKey: 'what_lec_review',
      targetKey: 'id',
    });
  }
};
