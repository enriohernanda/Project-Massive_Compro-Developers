const { where } = require('sequelize')
const {collections} = require('../model/collectionModel')

const createCollection = async (req, res) =>{
    try {
        const { imageId } = req.query
        const userId = req.decoded.id
        const idUserCollected  = req.imageownerid
        console.log(userId, idUserCollected)
        if (!userId || !idUserCollected || !imageId){
            return res.status(400).json({message : 'params is needed'})
        }
        const result = await collections.create({
            id: '',
            user_id : userId,
            image_id : imageId
        })
        if (result) {
            return res.status(201).json({status : 'success'})
        }
        res.status(500).json({status: 'failed'})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const deleteCollection = async (req, res) =>{
    try {
        const { imageId } = req.query
        const userId = req.decoded.id
        const idUserCollected = req.imageownerid
        const result = await collections.destroy({
            where :{
                user_id : userId,
                image_id : imageId
            }
        })
        if(result){
            return res.status(200).json({status : 'success'})
        }
        res.status(500).json({status: 'failed'})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const getCollection = async (req, res, next) => {
    try {
        const {imageId, authstatus} = req.query
        if(!imageId){
            return res.status(400).json({message : 'imageid is required'})
        }
        if (authstatus === 'false') {
            return next()
        }
        const userId = req.decoded.id 
        const result = await collections.findOne({
            where : {
                id : imageId ,
                user_id : userId
            }
        })
        req.userCollection = result
        return next()
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'internal is error'})
    }
}

const getListImageCollection = async (req, res, next) => {
    try {
        const userId = req.query.userId? req.query.userId : req.decoded.id ;
        if (!userId) {
            return res.status(400).json({message : 'user id is required'})
        } 
        const result = await collections.findAll({
            where : {
                user_id : userId
            },
            // attributes : ['collected_user_id', 'image_id']
            attributes : ['image_id']
        })
        // [{{Image_id:2}, Image_id:2}] array menampung object dengan key image_id
        const array = result.map(item => item.image_id);
        console.log(array)
        req.collectionlist = array
        return next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createCollection, deleteCollection, getCollection, getListImageCollection}