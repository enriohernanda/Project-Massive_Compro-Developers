const { Op, where } = require('sequelize')
const { images } = require('../model/imageModel')
const { Where } = require('sequelize/lib/utils')
const {domain} = require('../config/domain')
const { messages } = require('../model/messageModel')

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
        const arrayresult = result.map(image => ({
            url : `${domain}/image/${image.user_id}/${imageId}.jpg`,
            user_id : image.user_id,
            name : image.image_name,
            description : image.description
        }))
        const isLastResult = isLast.length < 4 ;
        res.status(200).json({
            isLast : isLastResult,
            result : arrayresult
        })
    } catch (error) { 
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
} 

const getUserImages = async (req, res, next) => {
    const { imageId, direction } = req.query
    const userId = req.query.userId;
    console.log(userId)
    if (!userId || !imageId || !direction){
        // return res.status(400).json({message: 'imageId or direction is required'})
        req.imagedata = 'not found' 
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
            limit:30,
            order : [['id', order]]
        })
        if (result.length > 0) {
            const isLast = await images.findAll({
                where : {
                    id : {
                        [operator] : imageId
                    }
                }, 
                attributes : ['id'],
                order : [['id', order]],
                limit : 31
            })
            const arrayresult = result.map(image => ({
                url : `${domain}/image/${userId}/${image.id}.jpg`,
                user_id : image.user_id,
                name : image.image_name,
                description : image.description
            }))
            console.log(arrayresult)
            const isLastResult = isLast.length < 31 ;
            req.imagedata = arrayresult
            req.islast = isLastResult
            res.status(200).json({imagedata: arrayresult, isLast : isLastResult})
        }
        console.log(result, "===========")
        req.imagedata = 'not found' 
        console.log(req.imagedata)
        return next()
    } catch (error) { 
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
} 

const getUserCollectionImage = async (req, res) => {
    const { direction } = req.query
    const imageId = req.collectionlist
    const userId = req.query.userId ? req.query.userId  : req.decoded.id;
    if (!userId || !imageId || !direction){
        // return res.status(400).json({message: 'imageId or direction is required'})
        req.imagedata = 'not found' 
        // return next()
        console.log('error')
        return res.status(400).json({status: 'error'})
    }
    const operator = Op.in
    const order = 'ASC';
    try {
        const result = await images.findAll({
            where:{
                id : {
                    [operator] : imageId
                },
            },    
            attributes : ['id','user_id', 'image_name', 'description'],
            limit:30,
            order : [['id', order]]
        })
        if (result.length > 0) {
            const isLast = await images.findAll({
                where : {
                    id : {
                        [operator] : imageId
                    }
                }, 
                attributes : ['id'],
                order : [['id', order]],
                limit : 31
            })
            const arrayresult = result.map(image => ({
                url : `${domain}/image/${image.user_id}/${image.id}.jpg`,
                user_id : image.user_id,
                name : image.image_name,
                description : image.description
            }))
            console.log(arrayresult)
            const isLastResult = isLast.length < 31 ;
            req.imagedata = arrayresult
            req.islast = isLastResult
            return res.status(200).json({imagedata: arrayresult, isLast : isLastResult})
        }
        console.log(result, "===========")
        req.imagedata = 'not found' 
        console.log(req.imagedata)
        res.status(404).json({status : 'failed', imagedata : req.imagedata})
    } catch (error) { 
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
} 

const getCollectionUserImagesLimit3 = async (req, res, next) => {
    const { direction } = req.query
    const imageId = req.collectionlist
    const userId = req.query.userId ? req.query.userId  : req.decoded.id;
    if (!userId || !imageId || !direction){
        // return res.status(400).json({message: 'imageId or direction is required'})
        req.imagedata = 'not found' 
        console.log('error')
        return next()
        // return res.status(400).json({status: 'error'})
    }
    const operator = Op.in
    const order = 'ASC';
    try {
        const result = await images.findAll({
            where:{
                id : {
                    [operator] : imageId
                },
            },    
            attributes : ['id','user_id', 'image_name', 'description'],
            limit: 3,
            order : [['id', order]]
        })
        if (result.length > 0) {
            const arrayresult = result.map(image => ({
                url : `${domain}/image/${image.user_id}/${image.id}.jpg`,
                user_id : image.user_id,
                name : image.image_name,
                description : image.description
            }))
            console.log(arrayresult)
            req.imagecollection = arrayresult
            return next()
        }
        console.log(result, "===========")
        req.imagecollection = 'not found' 
        console.log(req.imagedata)
        return next()
    } catch (error) { 
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
} 

const getLatestUserImagesLimit3 = async (req, res, next) => {
    const { imageId, direction } = req.query
    const userId = req.query.userId ? req.query.userId  : req.decoded.id;
    if (!userId || !imageId || !direction){
        // return res.status(400).json({message: 'imageId or direction is required'})
        req.imagedata = 'not found' 
        return next()
    }
    const operator = Op.gte
    const order = 'DESC'
    try {
        const result = await images.findAll({
            where:{
                id : {
                    [operator] : imageId
                },
                user_id : userId
            },    
            attributes : ['id','user_id', 'image_name', 'description'],
            order : [['id', order]],
            limit:3 
        })
        if (result.length > 0) {
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
            const arrayresult = result.map(image => ({
                url : `${domain}/image/${userId}/${image.id}.jpg`,
                user_id : image.user_id,
                name : image.image_name,
                description : image.description
            }))
            const isLastResult = isLast.length < 4 ;
            req.imagedata = arrayresult
            req.islast = isLastResult
            return next()
        }
        console.log(result, "===========")
        req.imagedata = 'not found' 
        console.log(req.imagedata)
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
        const { imageId } = req.query
        console.log(req.query)
        console.log(req.body)
        console.log(imageId)
        if (!imageId) {
            return res.status(400).json({
                status : 'failed',
                message : 'imageId is required'
            })
        }
        const result = await images.findOne({
            Where : {
                id : imageId
            },
            attributes : ['id','user_id', 'image_name','description']
        })
        const url = `${domain}/image/${result.user_id}/${imageId}.jpg`
        if (result) {
            req.imagedata = {urlimage : url, image_name : result.image_name, description : result.description}
            // res.status(200).json({url : url, image_name : result.image_name, description : result.description})
            return next()
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
        const imageDescription = req.body.imageDescription ? req.body.imageDescription : req.query.imageDescription;
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
            await images.create({id : newLastId ,user_id : userId, image_name : imageName, description : imageDescription})
            req.idImageCreated = newLastId
            return {id : newLastId} 
        }
        console.log('masuk2')
        return validationName
    } catch (error) {
        console.log(error)
        res.status(404).json({
            status : 'Failed',
            messages : error
        })
    }
} 

const getImageByName = async (req, res) => {
    try {
        const { imageName } = req.query
        if (!imageName) {
            return res.status(400).json({message: 'image Name required'})
        }
        const imagesResult = await images.findAll({
            where : {
                image_name : {
                    [Op.substring] : imageName
                }
            },
            attributes : ['id', 'user_id', 'image_name']
        })
        console.log(imagesResult)
        if (imagesResult.length > 0) {
            const refix = imagesResult.map(image => ({
                url : `${domain}/image/${image.user_id}/${image.id}.jpg`,
                userId : image.user_id,
                imageName : image.image_name
            }))
            return res.status(200).json(refix)
        }
        return res.status(404).json({status: 'failed',message:'image not found'})
    } catch (error) {
        console.log(error)
        res.status(404).json({
            status : 'Failed',
            messages : error
        })
    }
}

const getImageOwnerIdByImageId = async (req, res, next) => {
    try {
        const {imageId} = req.query
        if (!imageId) {
            return res.status(400).json({message : 'image id is required'})
        }
        const imageowner = await images.findOne({
            where : {
                id : imageId
            },
            attributes : ['user_id']
        }) 
        if (imageowner) {
            req.imageownerid = imageowner.user_id
            return next()
        }
        res.status(404).json({status : 'not found', message : 'owner image not found'})
    } catch (error) {
        console.log(error)
        res.status(404).json({
            status : 'Failed',
            messages : error
        })
    }
}

module.exports = { getImages, getUserImages ,getImageDetail, createImageRecord, getImageByName, getImageOwnerIdByImageId, getLatestUserImagesLimit3, getUserCollectionImage, getCollectionUserImagesLimit3}