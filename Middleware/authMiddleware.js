const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/secretKey')
const { DATE } = require('sequelize')

const signToken = (user) => {
    if(!user.id || !user.username || !user.role){
        return "Data is invalid"
    }
    const Token = jwt.sign(user, secretKey, {expiresIn : '24h'})
    return Token
}

const veryfyToken = (req, res, next) => {
    console.log(req.body.token)
    console.log(req.query.token)
    const tokenquery = req.query.token
    const token = tokenquery ? tokenquery : req.body.token ;
    // const now = new DATE.currenttimw
    console.log(token)
    if(!token){
        return res.status(400).json({message : 'Token is missing'});
    }
    console.log(secretKey)
    try {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return 'token is invalid'
            }
            if (!decoded.id || !decoded.username || !decoded.role) {
                return 'token is invalid'
            }
            return req.decoded = decoded
        })
    } catch (error) {
        return "error"
    }   
    if (!req.decoded) {
        return res.status(400).json({message: 'token is invalid'})
    }
    return next()
}

module.exports = { veryfyToken, signToken }