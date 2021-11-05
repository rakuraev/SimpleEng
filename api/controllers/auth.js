const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const keys = require("../config/keys")
const errorHeandler = require("../utils/errorHeandler")

module.exports.login = async (req, res) => {
  const cadidate = await User.findOne({
    username: req.body.username
  })
  if (cadidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, cadidate.password)
    if (passwordResult) {
      const token = jwt.sign({
        username: cadidate.username,
        userId: cadidate._id
      }, keys.jwt, {
        expiresIn: 60 * 30
      })
      res.status(200).json({
        token: `Bearer ${token}`,
        user: req.body.username
      })
    } else {
      res.status(401).json({
        message: "Неверный пароль"
      })
    }
  } else {
    res.status(404).json({
      message: "Не найден такой username"
    })
  }
}
module.exports.register = async (req, res) => {
  const cadidate = await User.findOne({
    username: req.body.username
  })
  if (cadidate) {
    res.status(409).json({
      message: 'username Занят'
    })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      username: req.body.username,
      password: bcrypt.hashSync(password, salt)
    })
      res.status(201).json({message: "Пользователь создан"})
      await user.save()
  }
}
module.exports.user = async (req, res) => {
  try {
    res.status(200).json({
      user: "username"
    })
  } catch (err) {
    res.status(404).json({
      message: 'Ошибка'
    })
  }
}

