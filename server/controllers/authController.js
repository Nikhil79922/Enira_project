const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const prisma = new PrismaClient();

async function handleSignUp(req, res) {
  try {
    const { name, email, role, password } = req.body;
    console.log(req.body)
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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
console.log( process.env.SECRET)
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
console.log(process.env.SECRET)
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
            html: process.env.HTML,
    
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
    return res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = {
  handleSignUp,
  handleLogin,
  handleForgetPassword,
  handleResetPassword,
};
