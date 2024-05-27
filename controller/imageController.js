const { Op } = require('sequelize')
const { images } = require('../model/imageModel')
const { Where } = require('sequelize/lib/utils')

// function to retrieve an image from image table based onthe provided image id
// The parameter needed is image id with query imageId 
// The return of function is JSON 
const getImages = async (req, res, next) => {
    const { imageId, direction } = req.query
    if (!imageId || !direction){
        return res.status(400).json({message: 'imageId or direction is required'})
    }
    const operator = direction === 'forward'? Op.gte : Op.lte;
    const order = direction === 'forward'? 'DESC' : 'ASC';
    try {
        const result = await images.findAll({
            where:{
                id : {
                    [operator] : imageId
                }
            },    
            attributes : ['id','user_id', 'image_name', 'description'],
            limit:3
        })
        const isLast = await images.findAll({
            where : {
                id : {
                    [operator] : imageId
                }
            }, 
            attributes : ['id'],
            order : [['id', order]],
            limit : 4
        })
        const isLastResult = isLast.length < 4 ;
        res.status(200).json({
            isLast : isLastResult,
            result : result
        })
    } catch (error) { 
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
} 

const getUserImages = async (req, res, next) => {
    const { userId, imageId, direction } = req.query
    if (!userId || !imageId || !direction){
        // return res.status(400).json({message: 'imageId or direction is required'})
        req.userimages = 'not found' 
        return next()
    }
    const operator = direction === 'forward'? Op.gte : Op.lte;
    const order = direction === 'forward'? 'DESC' : 'ASC';
    try {
        const result = await images.findAll({
            where:{
                id : {
                    [operator] : imageId
                },
                user_id : userId
            },    
            attributes : ['id','user_id', 'image_name', 'description'],
            limit:3
        })
        if (result) {
            const isLast = await images.findAll({
                where : {
                    id : {
                        [operator] : imageId
                    }
                }, 
                attributes : ['id'],
                order : [['id', order]],
                limit : 4
            })
            const isLastResult = isLast.length < 4 ;
            req.imagedata = result + isLastResult
            req.islast = isLastResult
            return next()
        }
        req.userimages = 'not found' 
        return next()
    } catch (error) { 
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
} 

const getImageDetail = async (req, res, next) => {
    try {
        const {userId, imageId} = req.query
        if (!imageId) {
            return res.status(400).json({
                status : 'failed',
                message : 'imageId is required'
            })
        }
        const result = await images.findOne({
            Where : {
                id : imageId,
                user_id : userId
            },
            attributes : ['id','title','description']
        })
        if (result) {
            req.imagedata
        }
        res.status(404).json({
            status:'failed',
            message : 'image is not found'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'Internal was error'
        })
    }
}

const createImageRecord = async (req, res, next) => {
    try {
        const userId = req.decoded.id;
        const imageName = req.body.imageName ? req.body.imageName : req.query.imageName;
        if (!imageName) {
            return res.status(400).json({message : 'Image Name is required'})
        }
        const validationName = await images.findOne({
            where: { user_id: userId, image_name: imageName },
            order: [['id', 'DESC']],
            attributes : ['image_name']
        });

        if (!validationName) {       
            console.log('masuk 1')         
            let lastId = await images.findOne({
                 order: [['id', 'DESC']]
            });
            let newLastId = lastId ? lastId.id + 1 : 1; 
            images.create({id : newLastId ,user_id : userId, image_name : imageName})
            req.idImageCreated = newLastId
            return {id : newLastId} 
        }
        console.log('masuk2')
        return validationName
    } catch (error) {
        res.status(404).json({
            status : 'Failed',
            messages : error
        })
    }
} 

module.exports = { getImages, getUserImages ,getImageDetail, createImageRecord}