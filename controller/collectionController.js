const {collections} = require('../model/collectionModel')

const createCollection = async (req, res) =>{
    try {
        const { idUserCollected, imageId } = req.query
        const userId = req.decoded.id
        if (!userId || !idUserCollected || !imageId){
            return res.status(400).json({message : 'params is needed'})
        }
        const result = await collections.create({
            id: '',
            user_id : userId,
            collected_user_id : idUserCollected,
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
        const { idUserCollected, imageId} = req.query
        const userId = req.decoded.id
        const result = await collections.destroy({
            where :{
                id: '',
                user_id : userId,
                collected_user_id : idUserCollected,
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


module.exports = {createCollection, deleteCollection}