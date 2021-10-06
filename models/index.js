const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const User = require('./user');
const Education = require('./education');
const Class = require('./class');
const Lecture = require('./lecture');
const Memo = require('./memo');
const Review = require('./review');
const Question = require('./question');
const Answer = require('./answer');
const PlayList = require('./playlist');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Education = Education;
db.Class = Class;
db.Lecture = Lecture;
db.Memo = Memo;
db.Review = Review;
db.Question = Question;
db.Answer = Answer;
db.PlayList = PlayList;

User.init(sequelize);
Education.init(sequelize);
Class.init(sequelize);
Lecture.init(sequelize);
Memo.init(sequelize);
Review.init(sequelize);
Question.init(sequelize);
Answer.init(sequelize);
PlayList.init(sequelize);

User.associate(db);
Education.associate(db);
Class.associate(db);
Lecture.associate(db);
Memo.associate(db);
Review.associate(db);
Question.associate(db);
Answer.associate(db);
PlayList.associate(db);

module.exports = db;
