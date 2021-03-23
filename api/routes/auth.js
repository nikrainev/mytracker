const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth')

const AuthInfo = require('../controllers/auth/authInfo')
const AuthActions = require('../controllers/auth/authActions')

// Регистрация
router.post('/signup', AuthActions.post_signup_info)

//Вход (через форму или куки)
router.post("/login", AuthActions.post_login_info)

//Auth информация (Логин, Почта, Id, дата регистрации)
router.get("/me", checkAuth, AuthInfo.get_auth_info)



module.exports = router