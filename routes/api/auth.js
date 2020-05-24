const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')
//@orute     GET api/auth
// @desc     Test route
// @access   Public

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		res.json(user)
	} catch (error) {
		console.error(error.message)
		res.status(500).send('Server Error')
	}
})

//@orute     POST api/auth
// @desc     Authenticate users and get token
// @access   Public

router.post(
	'/',

	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists(),
	],

	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ error: errors.array() })
		}

		const { email, password } = req.body

		try {
			// See if users doesn't exist

			let user = await User.findOne({ email })

			if (!user) {
				return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
			}

			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
			}

			// return jsonwebtoken
			const payload = {
				user: {
					id: user.id,
				},
			}
			jwt.sign(
				payload,
				process.env.jwtSecret,
				{ expiresIn: 360000 }, //change the value to like 3600 which is 1hr, curreent value just for testing
				(err, token) => {
					if (err) throw err
					res.json({ token })
				})
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server error')
		}
	}
)

module.exports = router
