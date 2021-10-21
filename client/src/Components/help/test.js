const nodemailer = require('nodemailer');
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1f7b6c31a85129",
    pass: "a5251a75e930fa"
  }
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: 'wkdgyrud833@naver.com',
  to: 'wkdgyrud833@naver.com',
  subject: '졸작 테스트',
  text: '너에게 닿기를...'
}

send(email_data);