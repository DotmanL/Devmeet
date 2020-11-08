const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')
const normalize = require('normalize-url')
const _ = require('lodash')
const nodemailer = require('nodemailer')
const Email = require('email-templates')
const nodemailerSendgrid = require('nodemailer-sendgrid')

//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//@orute     POST api/users
// @desc     Register users
// @access   Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],

  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
      // See if users exist

      let user = await User.findOne({ email })

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }
      // Get users gravatar

      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm',
        }),
        { forceHttps: true }
      )

      user = new User({
        name,
        email,
        avatar,
        password,
      })

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      //await user.save();

      const payload = {
        id: user.id,
        name,
        email,
        avatar,
        password: user.password,
      }

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 }, //change the value to like 3600 which is 1hr, curreent value just for testing
        (err, token) => {
          if (err) throw err
          res.json({ token })

          const transport = {
            apiKey: process.env.SENDGRID_API_KEY,
          }

          const transporter = nodemailer.createTransport(
            nodemailerSendgrid(transport)
          )
          transporter.verify((error, success) => {
            if (error) {
              console.error(error)
            } else {
              console.log(success)
            }
          })

          const email = new Email({
            message: {
              from: process.env.THE_EMAIL,
              subject: `Account Activation link`,
            },
            transport: transporter,
            send: true,
            preview: false,
          })

          email
            .send({
              template: 'verify',
              message: {
                to: user.email,
                // attachments: [=
                //   {
                //     filename: 'texting.txt',
                //     content: 'hello world, how are you doing!'
                //   }
                // ]
              },
              locals: {
                name: name,
                token: token,
                url: `${process.env.CLIENT_URL}`,
              },
            })
            .then(() => console.log('email has been sent!'))
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// @orute     POST api/verifyaccount
// @desc     Verify users
// @access   Public

router.post('/verifyaccount/:token', async (req, res) => {
  const { token } = req.body

  if (token) {
    jwt.verify(token, process.env.jwtSecret, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          error: 'Expired link. Signup again',
        })
      }

      const { name, email, avatar, password } = decoded
      User.findOne({ email }).exec((err, user) => {
        if (user) {
          return res
            .json(400)
            .json({ error: 'User with this mail exists already' })
        }

        let newUser = new User({ name, email, avatar, password })

        newUser.save((err, user) => {
          if (err) {
            console.log('SAVE USER IN ACCOUNT ACTIVATION ERROR', err)
            return res.status(401).json({
              error: 'Error saving user in database. Try signup again',
            })
          }
          return res.json({
            message: 'Signup success. Welcome to Devmeet.',
          })
        })
      })
    })
  } else {
    return res.json({
      message: 'Something went wrong. Try again.',
    })
  }
})

// @orute     Put api/forgotpassword
// @desc     fogot password
// @access   Public

router.put(
  '/forgotpassword',
  [check('email', 'Please include a valid email').isEmail()],

  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email } = req.body

    try {
      let user = await User.findOne({ email })

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const payload = {
        id: user.id,
        name: user.name,
      }

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 }, //change the value to like 3600 which is 1hr, curreent value just for testing
        (err, token) => {
          if (err) throw err
          res.json({ token })

          const transport = {
            apiKey: process.env.SENDGRID_API_KEY,
          }

          const transporter = nodemailer.createTransport(
            nodemailerSendgrid(transport)
          )
          transporter.verify((error, success) => {
            if (error) {
              console.error(error)
            } else {
              console.log(success)
            }
          })

          const email = new Email({
            message: {
              from: process.env.THE_EMAIL,
              subject: `Password Reset link`,
            },
            transport: transporter,
            send: true,
            preview: false,
          })

          return user.updateOne(
            { resetPasswordLink: token },
            (err, success) => {
              if (err) {
                return res.status(400).json({
                  error:
                    'Database connection error on user password forgot request',
                })
              }
              email
                .send({
                  template: 'reset',
                  message: {
                    to: user.email,
                    // attachments: [=
                    //   {
                    //     filename: 'texting.txt',
                    //     content: 'hello world, how are you doing!'
                    //   }
                    // ]
                  },
                  locals: {
                    name: user.name,
                    token: token,
                    url: `${process.env.CLIENT_URL}`,
                  },
                })
                .then(() => console.log('email has been sent!'))
            }
          )
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Unable to reset password')
    }
  }
)

// @orute     Put api/resetpassword/:token
// @desc     reset password
// @access   Public

router.put(
  '/resetpassword/:token',

  [check('newPassword').isLength({ min: 6 })],

  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { resetPasswordLink, newPassword } = req.body

    try {
      if (resetPasswordLink) {
        jwt.verify(resetPasswordLink, process.env.jwtSecret, function (
          err,
          decoded
        ) {
          if (err) {
            return res.status(400).json({
              error: 'Expired link. Try again',
            })
          }

          User.findOne({ resetPasswordLink }, (err, user) => {
            if (err || !user) {
              return res.status(400).json({
                error: 'Something went wrong. Try later',
              })
            }

            const updatedFields = {
              password: newPassword,
              resetPasswordLink: '',
            }

            const salt = bcrypt.genSaltSync(10)
            updatedFields.password = bcrypt.hashSync(newPassword, salt)

            user = _.extend(user, updatedFields)

            user.save((err, result) => {
              if (err) {
                return res.status(400).json({
                  error: 'Error resetting user password',
                })
              }
              res.json({
                message: `Great! Now you can Sign in with your new password`,
              })
            })
          })
        })
      }
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)
module.exports = router
