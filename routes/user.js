const express = require("express");
//const passport = require('passport');
const { signToken } = require("./middleware");
//const authRouter = require('./auth');
const { User } = require("../models");

const router = express.Router();

//닉네임 중복확인
router.get("/check/:nickname", async (req, res, next) => {
  const nickname = unescape(req.params.nickname);
  try {
    const exNick = await User.findOne({ where: { nickname } }); //컬럼명 똑같이 넣어줘야함!!!
    if (!exNick) {
      res.json({
        success: true,
        result: true,
      });
    } else {
      res.json({
        success: true,
        result: false,
      });
    }
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const user_id = req.body.user_id; //바디 키 이름이랑 같아야함!!!!
  try {
    const exUser = await User.findOne({ where: { user_id } });
    if (exUser) {
      const token = signToken(exUser);
      res.cookie("user_token", token, { httpOnly: true });
      res.json({
        user_id: user_id,
        success: true,
        type: 1,
        token: token,
      });
    } else {
      res.json({
        success: true,
        type: 0,
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err, //{"success":false,"error":{}} err에 뭐 안담겨있음
    });
    return next(err);
  }
});

router.post("/signup", async (req, res) => {
  const {
    nickname,
    name,
    password,
    phone,
    email,
    birth,
    role,
    user_img,
  } = req.body;
  try {
    await User.create({
      nickname: nickname,
      name: name,
      password: password,
      phone: phone,
      email: email,
      birth: birth,
      role: role,
      user_img: user_img,
    }).then((x) => {
      res.json({
        success: true,
        user_id: x.get("user_id"),
      });
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
});

// logout
router.post("/logout", async (req, res) => {
  try {
    res.clearCookie("user_token");
    res.json({
      success: true,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
});

module.exports = router;
// test
