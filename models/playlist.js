const Sequelize = require('sequelize');

module.exports = class PlayList extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        week: {
          type: Sequelize.STRING(10),
          allowNull: false,
          //   defaultValue: ,
        },
        sequence: {
          type: Sequelize.INTEGER(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: true,
        modelName: 'PlayList', //모델네임. 노드프로젝트에서 사용
        tableName: 'playlists',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {
    db.PlayList.belongsTo(db.User, {
      foreignKey: 'player',
      targetKey: 'id',
    });
    db.PlayList.hasMany(db.Lecture, {
      foreignKey: 'what_playlist',
      sourceKey: 'id',
    });
  }
};
