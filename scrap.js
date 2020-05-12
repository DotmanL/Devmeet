const User = require('../models/user')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const _ = require('lodash')
const { OAuth2Client } = require('google-auth-library')
const fetch = require('node-fetch')
// sendgrid
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.facebookLogin = (req, res) => {
  console.log('FACEBOOK LOGIN REQ BODY', req.body)
  const { userID, accessToken } = req.body

  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`

  return (
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      // .then(response => console.log(response))
      .then((response) => {
        const { email, name } = response
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
            const { _id, email, name, role } = user
            return res.json({
              token,
              user: { _id, email, name, role },
            })
          } else {
            let password = email + process.env.JWT_SECRET
            user = new User({ name, email, password })
            user.save((err, data) => {
              if (err) {
                console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err)
                return res.status(400).json({
                  error: 'User signup failed with facebook',
                })
              }
              const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
              const { _id, email, name, role } = data
              return res.json({
                token,
                user: { _id, email, name, role },
              })
            })
          }
        })
      })
      .catch((error) => {
        res.json({
          error: 'Facebook login failed. Try later',
        })
      })
  )
}



















const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
exports.googleLogin = (req, res) => {
  const { idToken } = req.body

  client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID }).then((response) => {
    // console.log('GOOGLE LOGIN RESPONSE',response)
    const { email_verified, name, email } = response.payload
    if (email_verified) {
      User.findOne({ email }).exec((err, user) => {
        if (user) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
          const { _id, email, name, role } = user
          return res.json({
            token,
            user: { _id, email, name, role },
          })
        } else {
          let password = email + process.env.JWT_SECRET
          user = new User({ name, email, password })
          user.save((err, data) => {
            if (err) {
              console.log('ERROR GOOGLE LOGIN ON USER SAVE', err)
              return res.status(400).json({
                error: 'User signup failed with google',
              })
            }
            const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
            const { _id, email, name, role } = data
            return res.json({
              token,
              user: { _id, email, name, role },
            })
          })
        }
      })
    } else {
      return res.status(400).json({
        error: 'Google login failed. Try again',
      })
    }
  })
}
