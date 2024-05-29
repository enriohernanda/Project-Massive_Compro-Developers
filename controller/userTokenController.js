const {userToken} = require('../model/userTokenModel')


const createdTokenDB = async (req, res) => {
    try {
        const token = req.token
        // const userId = req.decoded.id
        const userId = req.userId
        const message = req.message
        console.log(userId, message, token)
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

const deleteTokenDB = async (req, res) => {
    try {
        const { token } = req.query
        const userId = req.decoded.id
        const result = await userToken.destroy({
            where : {
                user_id : userId,
                token : token
            }
        })
        console.log(result) 
        if (result) {
            
        }
        res.status(200).json({status: 'success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

module.exports = {createdTokenDB, deleteTokenDB}