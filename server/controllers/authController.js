const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const prisma = new PrismaClient();

async function handleSignUp(req, res) {
  console.log("Dwd")
  try {
    const { name, email, role, password } = req.body;
    console.log(req.body)
    
    // Checking if email or phone already exists in the database
    const existingUser = await prisma.user.findUnique({ where: { email } });
      
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const user = await prisma.user.create({
      data: {
        name,
        email,
        role,
        password: hashedPassword,

      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err); // Log error to understand the issue
    res.status(400).json({ message: "SignUp Failed" });
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      { email: user.email, _id: user.id },
      process.env.SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Logged In successfully",
      token: token,
      role: user.role,
      name: user.name,
    });
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: "Login Failed" });
  }
}

async function handleForgetPassword(req, res) {
  const { email } = req.body;
  console.log(email)
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: "User Not Found" });
  }

  const token = jwt.sign({ email: user.email }, process.env.SECRET, {
    expiresIn: "10m",
  });

  const link = `http://localhost:5176/reset-password?token=${token}`;

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset Request",
    text: `
    <!doctype html>
    <html lang="en-US">
    
    <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
      a:hover {text-decoration: underline !important;}
    </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
      style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
      <tr>
          <td>
              <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                  align="center" cellpadding="0" cellspacing="0">
                  
                  <tr>
                      <td>
                          <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                              style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                              <tr>
                                  <td style="height:40px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td style="padding:0 35px;">
                                      <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                          requested to reset your password</h1>
                                      <span
                                          style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                          We cannot simply send you your old password. A unique link to reset your
                                          password has been generated for you. To reset your password, click the
                                          following link and follow the instructions.
                                      </p>
                                      <a href=${link}
                                          style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                          Password</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="height:40px;">&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                 
              </table>
          </td>
      </tr>
    </table>
    <!--/100% body table-->
    </body>
    
    </html>`,
            html: `
    <!doctype html>
    <html lang="en-US">
    
    <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
      a:hover {text-decoration: underline !important;}
    </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
      style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
      <tr>
          <td>
              <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                  align="center" cellpadding="0" cellspacing="0">
                 
                  <tr>
                      <td>
                          <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                              style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                              <tr>
                                  <td style="height:40px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td style="padding:0 35px;">
                                      <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                          requested to reset your password</h1>
                                      <span
                                          style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                          We cannot simply send you your old password. A unique link to reset your
                                          password has been generated for you. To reset your password, click the
                                          following link and follow the instructions.
                                      </p>
                                      <a href="${link}"
                                          style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                          Password</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="height:40px;">&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                 
              </table>
          </td>
      </tr>
    </table>
    <!--/100% body table-->
    </body>
    
    </html>`
  };

  try {
    await transport.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: error.message });
  }
}

async function handleResetPassword(req, res) {
  const { token } = req.query;
  const { password } = req.body;
console.log(password)
console.log(token)

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.SECRET);
      const hashedPassword = await bcrypt.hash(password, 10);

      const updatedUser = await prisma.user.update({
        where: { email: decode.email },
        data: { password: hashedPassword },
      });

      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.log(error)
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({ message: "Token has expired" });
      }
      return res.status(400).json({ message: "JWT Token verification failed" });
    }
    
  } else {
    console.log("adsd")
    return res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = {
  handleSignUp,
  handleLogin,
  handleForgetPassword,
  handleResetPassword,
};
