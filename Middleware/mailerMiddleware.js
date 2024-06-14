const nodemailer = require('nodemailer')
const domain = require('../config/domain')

const sendMail = (req, res, next) => {
    const { mail }= req.query
    const token = req.tokenMail

    let transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth : {
            user : "felixkun5000@gmail.com",
            pass : "felix123445"
        }
    })
    
    let mailOption = {
        from : "felixkun5000@gmail.com",
        to : `${mail}`,
        subject : "verifikasi token ",
        text : `${ domain }/update?q=${token}`
    }
    
    transporter.sendMail(mailOption,
    function(error, info){
        if (error) {
            console.log(error)
            return res.status(400).json({
                status : "error", 
                message : "gagal mengirim mail"
            })
        } else {
            console.log('Email sent : ' + info.response)
        }
    })
}

module.exports = { sendMail }