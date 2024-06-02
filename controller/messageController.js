const { Sequelize } = require('sequelize')
const { Op } = require('sequelize')
const { messages } = require('../model/messageModel')

const createMessage = async (req, res, next) => {
    try {
        const {messageRoomId, receiverUserId, message} = req.body
        const senderuserId = req.decoded.id
        console.log(senderuserId)
        if (!messageRoomId) {
            const RoomId = await messages.findOne({
                where : {
                    [Op.or] : [
                                {receiver_user_id : senderuserId,
                                sender_user_id : receiverUserId},

                                {receiver_user_id : receiverUserId,
                                sender_user_id : senderuserId}

                    ]
                },
                attributes : ['message_room_id']
            })
            //     where : {
            //         [Op.or] : [
            //             {
            //                 [Op.or] : [
            //                     {receiver_user_id : senderuserId},
            //                     {sender_user_id : receiverUserId},
            //                 ]
            //             },
            //             {
            //                 [Op.or] : [
            //                     {receiver_user_id : receiverUserId},
            //                     {sender_user_id : senderuserId}
            //                 ]
            //             }   
            //         ]
            //     },
            //     attributes : ['message_room_id']
            // })
            console.log(RoomId.message_room_id,'dwadawdwa')
            if (RoomId.message_room_id) {
                const result = await messages.create({
                    id : '',
                    message_room_id : RoomId.message_room_id,
                    sender_user_id : senderuserId,
                    receiver_user_id : receiverUserId,
                    message : message
                })
                req.messagedata = {
                    id : receiverUserId,
                    title : 'you have new message',
                    message : 'you have new message' 
                }
                return next()
            }

            var latestRoomId = await messages.max('message_room_id')
            console.log(latestRoomId,'walallw')
            const newLatestRoomId = latestRoomId? latestRoomId + 1 : 1;
            const result = await messages.create({
                id : '',
                message_room_id : newLatestRoomId,
                sender_user_id : senderuserId,
                receiver_user_id : receiverUserId,
                message : message
            })
            req.messagedata = {
                id : receiverUserId,
                title : 'you have new message',
                message : 'you have new message' 
            }
            return next()
        }
        const result = await messages.create({
            id : '',
            message_room_id : messageRoomId,
            sender_user_id : senderuserId,
            receiver_user_id : receiverUserId,
            message : message
        })
        req.messagedata = {
            id : receiverUserId,
            message : 'you have message' 
        }
        return next()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const getMessage = async (req, res) => {
    try {
        const {startMessageId,senderUserId, direction} = req.query
        var messageRoomId = req.query.messageRoomId
        const userId = req.decoded.id
        const receiverUserId = req.decoded.id
        if (!messageRoomId || !req.messageRoomId) {
            // return res.status(400).json({message : 'messageRoomId is required'})
            RoomId = await messages.findOne({
                where : {
                    [Op.or] : [
                        {
                            receiver_user_id : senderUserId,
                            sender_user_id : receiverUserId
                        },
                        {
                            receiver_user_id : receiverUserId,
                            sender_user_id : senderUserId
                        }
                    ]
                },
                attributes : ['message_room_id']
            })
            messageRoomId = RoomId.message_room_id
        }
        if (!startMessageId) {
            // get Latest Message by startMessageIdId = 0
            const result = await messages.findAll({
                where : {
                    message_room_id : messageRoomId,
                },
                attributes : ['receiver_user_id','sender_user_id','message'],
                order : [['id', 'DESC']],
                limit : 20
            })
            console.log('aneh 2')
            return res.status(200).json(result)
        }
        console.log('aneh 1')
        if (!messageRoomId) {
            if (!userId) {
                return res.status(400).json({
                    message : 'receiverUserId is required'
                })
            }
            const listRoom = await messages.findAll({
                attributes : [
                    [Sequelize.fn('DISTINCT', Sequelize.col('message_room_id')), 'message_room_id'],
                    'sender_user_id',
                    'receiver_user_id'
                ],
                where : { 
                    [Op.or] : [
                        { sender_user_id : userId },
                        { receiver_user_id : userId },
                    ]
                }
            })
            return res.status(200).json(listRoom, userId)
        }
        if (!direction) {
            return res.status(400).json({message : 'direction is required'})
        }
        const operator = direction === 'forward'? Op.gte : Op.lte; 
        const result = await messages.findAll({
            where : {
                id : {[operator] : startMessageId},
                message_room_id : messageRoomId
            },
            attributes : ['receiver_user_id','sender_user_id','message'],
            order : [['id', 'DESC']],
            limit : 21
        })
        
        if (result.lenght < 21) {
            return res.status(200).json({result : result, islast : true})
        }
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}


module.exports = {createMessage, getMessage}
