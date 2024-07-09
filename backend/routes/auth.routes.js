import express from 'express'
import passport from 'passport'

import { login } from '../controllers/auth.controller.js'
import github from '../utils/github'

passport.use(github)

const router = express.Router()

router.use(passport.initialize())
router.use(passport.session())

passport.serializeUser(function(user, done) {
	done(null, user)
})

passport.deserializeUser(function(obj, done) {
	done(null, obj)
})

router.get('/', function (req, res) {
	res.render('index', {user: req.user})
})
// router.post('/login', login)
// router.post('/signup', signup)
// router.post('/logout', logout)

export default router