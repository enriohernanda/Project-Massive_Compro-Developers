const {notifications} = require('../model/notificationModel')

const singleCreateNotification = async (req, res, next) => {
    try {
        const userId = req.id
        if (req.messagedata) {
            const messagedata = req.messagedata
            const newrecord = await notifications.create({
                id : '',
                user_id : messagedata.id,
                title : messagedata.title,
                message : messagedata.message
            })
            return res.status(200).json({
                status: 'success'
            })
        }
        if (!userId) {
            return res.status(400).json({
                message: 'userId is required'
            })
        }
        const result = await notifications.create({
            id : '',
            user_id : userId,
            title : 'WELCOME TO MUSIUM OF ART',
            message : 'user was created successfully'
        })
        return next()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const bulkCreateNotification = async (req, res, next) => {
    try {
        const followerdata = req.followerdata 
        if (followerdata) {
            const result = await notifications.bulkCreate(followerdata)
            return next()
        }
        return next()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}
// perbaiki
const getNotification = async (req, res) => {
    try {
        const { startNotificationId } = req.query
        const userId = req.decoded.id
        if (!userId) {
            return res.status(400).json({message : 'userId is required'})
        }
        if (startNotificationId) {
            const result = await notifications.findAll({
                where : {
                    user_id : userId,
                    id : {
                        [Op.lte] : startNotificationId}
                },
                attributes : ['id','title', 'message'],
                order : [['id', 'DESC']],
                limit : 10
            })
            return res.status(200).json(result)
        }
        const result = await notifications.findAll({
            where : {
                user_id : userId
            },
            attributes : ['id','title', 'message'],
            order : [['id', 'DESC']],
            limit : 10
        })
        if (result) {
            return res.status(200).json(result)
        }
        res.status(404).json({message : 'no notification'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'Internal is error'})
    }
}

module.exports = {singleCreateNotification, bulkCreateNotification, getNotification}