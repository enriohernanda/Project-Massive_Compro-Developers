const express = require('express')

const { veryfyToken } = require('../Middleware/authMiddleware')
const { domain } = require('../config/domain')
const userController = require('../controller/userController') 
const userTokenController = require('../controller/userTokenController')
const imageController = require('../controller/imageController')
const countryController = require('../controller/countryController')
const followerController = require('../controller/followerController')
const notificationController = require('../controller/notificationController')
const collectionController = require('../controller/collectionController')
const likeController = require('../controller/likeController')
const router = express.Router();


// registrasi required username, email and password
router.post('/registration', userController.createUser, notificationController.singleCreateNotification, userTokenController.createdTokenDB)

// authorisasi required email and password
router.post('/authentication', userController.getUserValidation, userTokenController.createdTokenDB)

// validasi token localstorage required only token
router.post('/validation', veryfyToken,  (req, res)=>{
    return res.status(200).json({
        status : "success",
        message : 'logged'
    })
})

// get users limit 16 required startUserID and direction
router.get('/', userController.getUsers)

// // get all images limit 30 required imageId and direction
router.get('/image', imageController.getUserImages)

// getting user's data profile like (imagedata , userdata, followerdata) required (userId, imageId, direction <for image direction>, )
router.get('/profile', userController.getDataUser, countryController.getCountryNameById,collectionController.getListImageCollection, imageController.getCollectionUserImagesLimit3, imageController.getLatestUserImagesLimit3, followerController.countFollowerAndFollowed , (req, res) =>{
    const url = req.userdata.photo_profile? `${domain}/image/${req.userdata.id}/profile.jpg` : '0' ;
    req.userdata.photo_profile = url
    console.log(req.imagedata)
    res.status(200).json({
        userdata : req.userdata,
        imagedata : req.imagedata,
        imagecollection : req.imagecollection,
        follower : req.countfollowed,
        followed : req.countfollower,
        like : req.countlike
    })
})

module.exports = router;