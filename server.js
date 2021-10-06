// const express = require("express");
// const { sequelize } = require("./models");
// const path = require("path");

// const morgan = require("morgan");
// const apiRouter = require("./routes");

// const app = express();

// app.set("port", process.env.PORT || 5000);

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // app.use("/api", apiRouter);

// app.get("/", (req, res) => {
//   res.send({ message: "Hello Express!" });
// });

// // app.use((req, res, next) => {
// //   res.status(404).send("DAMN! 404 NOT FOUND... YOU MAD?");
// // });

// // app.use((err, req, res, next) => {
// //   res.locals.message = err.message;
// //   res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
// //   res.status(err.status || 500);
// //   res.render("error");
// // });

// app.listen(app.get("port"), () => {
//   sequelize
//     .sync({ force: false }) //force: true서버 실행시마다 테이블 재생성
//     .then(() => {
//       console.log("success connecting db");
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   console.log(`server on port ${app.get("port")}`);
// });
