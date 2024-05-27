const {userToken} = require('../model/userTokenModel')


const createdTokenDB = async (req, res) => {
    try {
        const token = req.token
        const userId = req.id
        const message = req.message
        console.log(userId, message, token, '=====================')
        const result = await userToken.create({
            id : '',
            user_id : userId,
            token : token
        })
        res.status(201).json({
            message : message,
            token : token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const deleteTokenDB = (req, res) => {
    try {
        const {userId , token} = req.query
        const result = userToken.destroy({
            where : {
                user_id : userId,
                token : token
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

module.exports = {createdTokenDB, deleteTokenDB}