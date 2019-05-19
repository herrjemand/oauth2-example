const path = require('path')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const { User } = require('../models')

const app = express()

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  secret: 'oauth2-example',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  if (!req.session.currentUser) {
    return res.redirect('/account/login')
  }
  res.send(
    `<h1>${req.session.currentUser.username}</h1>
    <a href="/account/logout">logout</a>`
  )
})

app.get('/login', (req, res) => {
  res.locals.model = { username: '', password: '' }
  res.render('login')
})

app.get('/session', (req, res) => {
  res.redirect('/account/login')
})

app.post('/session', (req, res) => {
  // ## 0. 接收表单
  const { username, password } = req.body

  res.locals.model = { username, password: '' }

  // ## 1. 合法化校验
  if (!(username && password)) {
    res.locals.error = 'Please complete the form!'
    return res.render('login')
  }

  // ## 2. 持久化
  const user = User.findOne({ username })

  // ## 3. 客户端响应
  if (!user) {
    // res.locals.error = 'Username or Password error!'
    res.locals.error = 'Username not exist!'
    return res.render('login')
  }
  // 密码校验
  if (user.password !== password){
    res.locals.error = 'Password error!'
    return res.render('login')
  }

  // save session
  req.session.currentUser = user
  res.redirect(req.query.redirect ? req.query.redirect : '/account')
})

/**
 * GET /account/logout
 */
app.get('/logout', (req, res) => {
  // ## 1. 删除session中当前登录用户
  delete req.session.currentUser
  // ## 2. 跳转到登录页
  res.redirect('/account/login')
})

module.exports = app
