const {likes} = require('../model/likeModel')

const createLike = async (req, res) => {
    try {
        const { idUserLiked, imageId } = req.query
        const userId = req.decoded.id
        const result = await likes.create({
            id : '',
            liked_by_user_id : userId,
            liked_user_id : idUserLiked,
            image_id : imageId
        })
        if (result) {
            
        }
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
        const userId = req.decoded.id
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




