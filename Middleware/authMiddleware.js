const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/secretKey')

const signToken = (user) => {
    if(!user.id || !user.username || !user.role){
        return "Data is invalid"
    }
    const Token = jwt.sign(user, secretKey, {expiresIn : '24h'})
    return Token
}

const veryfyToken = (req, res, next) => {
    const Token = req.query.Token
    if(!Token){
        return res.status(400).json({message : 'Token is missing'});
    }
    console.log(secretKey)
    jwt.verify(Token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(400).json({message : 'Token is invalid'});
        } else { 
            req.decoded = decoded  ;
            next();
        }
    })
}

module.exports = { veryfyToken, signToken }
