const { where } = require('sequelize')
const {likes} = require('../model/likeModel')

const createLike = async (req, res) => {
    try {
        const { imageId } = req.query
        const userId = req.decoded.id
        const idUserLiked = req.imageownerid? req.imageownerid: req.query.userId 
        const result = await likes.create({
            id : '',
            liked_by_user_id : userId,
            liked_user_id : idUserLiked,
            image_id : imageId
        })
        if (result) {
            return res.status(200).json({status : 'success'})
        }
        res.status(400).json({status : 'failed'})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const deletelike = async (req, res) => {
    try {
        const { imageId } = req.query
        const userId = req.decoded.id
        if (!imageId) {
            res.status(400).json({message: 'imageid is required'})
        }
        const result = likes.destroy({
            where : {
                liked_by_user_id : userId,
                image_id : imageId
            }
        })
        res.status(200).json({status: 'success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const getlike = async (req, res) => {
    try {
        const { imageId } = req.query
        const userId = req.query.userId? req.query.userId : req.decoded.id ; 
        if(!imageId){
            return res.status(400).json({message : 'imageid is required'})
        }
        const result = await likes.findOne({
            where : {
                liked_by_user_id : userId,
                image_id : imageId 
            }
        })
        res.status(200).json(req.imagedata, req.usercollection, result)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const countlike = async (req, res) => {
    try {
        const {userId, imageId} = req.query
        const countLikedUserId = userId? userId : req.decoded.id;
        if (!countLikedUserId) {
            return res.status(400).json({message : 'userId is required'})
        } 
        const countLiked = await likes.count()
        if (countLiked) {
            return res.status(200).json(countLiked)
        }
        return res.status(404).json({
            status : 'not found'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

module.exports = { createLike, deletelike, getlike, countlike }




