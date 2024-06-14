const jwt = require('jsonwebtoken')

const createTokenUpdatePassword = (req, res, next) => {
    const { userMail } = req.body?? {}
    if (!userMail) {
        return res.status(400).json({
            status : "failed",
            message : "userMail is required"
        })
    }
    const token = jwt.sign({userMail : userMail}, secretKey, {expiresIn : "15m"})
    if (!token) {
        return res.status(500).json({
            message : "internal was error"
        })
    } 
    next()
}

const veryfyTokenUpdatePassword = (req, res, next) => {
    const { tokenMail } = req.body?? {}
    if (!tokenMail) {
        return res.status(400).json({
            status : "failed",
            message : "tokenMail is required"
        })
    }
    try {
        jwt.verify(tokenMail, secretKey, (err, decoded) => {
            if (err) {
                console.log(err)
            }
            if (decoded.userMail ) {
                return
            }
            return req.decoded = decoded
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message : "internal was error"
        })
    }
    if (!req.decoded) {
        return res.status(400).json({
            status : "error",
            message : "token is invalid"
        })
    }
}

module.exports = {createTokenUpdatePassword, veryfyTokenUpdatePassword}