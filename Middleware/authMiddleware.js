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
    console.log('walllawe delete')
    console.log(req.body.token)
    console.log(req.query.token)
    console.log(req.params.token)
    console.log(req.body)
    const tokenquery = req.query.token
    const token = tokenquery ? tokenquery : req.body.token ;
    // const now = new DATE.currenttimw
    console.log(token)
    // const { authstatus } = req.query
    // if (authstatus === false) {
    //     return next()
    // }
    if(!token){
        console.log('walllawe delete')
        console.log('walllawe delete')
        return res.status(400).json({message : 'token is missing'});
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
        return res.status(400).json({status : 'error' , message: 'token is invalid'})
    }
    return next()
}

const OptionalValidationToken = (req, res, next) => {
    console.log(req.body.token)
    console.log(req.query.token)
    const { authstatus } = req.query
    if (authstatus === false || !authstatus ) {
        // req.query.userId = 0
        return next()
    }
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
                console.log(decoded,'e',err)
                return 'token is invalid'
            }
            if (!decoded.id || !decoded.username || !decoded.role) {
                console.log(decoded,'w',err)
                return 'token is invalid'
            }
            return req.decoded = decoded
        })
    } catch (error) {
        return "error"
    }   
    if (!req.decoded) {
        return res.status(400).json({status : 'error', message: 'token is invalid'})
    }
    return next()
}

module.exports = { veryfyToken, signToken ,OptionalValidationToken}