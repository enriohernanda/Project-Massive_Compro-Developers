const nodemailer = require('nodemailer')
const domain = require('../config/domain')
const {user_email, pass_email} = require('../config/mailAccount')

const sendMail = async (req, res, next) => {
    const { mail }= req.query
    const token = req.tokenMail

    let transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth : {
            user : user_email,
            pass : pass_email
        }
    })
    
    let mailOption = {
        from : user_email,
        to : `${mail}`,
        subject : "verifikasi token ",
        text : `${ domain }/update?q=${token}`
    }
    
    try {
        let info = await transporter.sendMail(mailOption)
        console.log("Email response : ", info.response)
        return res.status(200).json({
            status : "success", 
            message : "berhasil mengirim mail"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status : "error", 
            message : "gagal mengirim mail"
        })
    } 
}

module.exports = { sendMail }