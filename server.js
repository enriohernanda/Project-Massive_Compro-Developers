const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/config')
const upload = require('./Middleware/uploadMiddleware')
const { veryfyToken } = require('./Middleware/authMiddleware')

const userController = require('./controller/userController') 
const userTokenController = require('./controller/userTokenController')
const imageController = require('./controller/imageController')
const countryController = require('./controller/countryController')
const developerController = require('./controller/developerController')
const followerController = require('./controller/followerController')
const notificationController = require('./controller/notificationController')
const messageController = require('./controller/messageController')
const contactusController = require('./controller/contactusController')
const likeController = require('./controller/likeController')
const collectionController = require('./controller/collectionController')
const adminController = require('./controller/adminController')
const adminTokenController = require('./controller/adminTokenController')

// app.use(bodyParser.urlencoded({extended : true}))
app.use(express.urlencoded({extended : true}))
// app.use(bodyParser.json())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.delete('/api/collection',veryfyToken, collectionController.deleteCollection)

app.put('/api/collection',veryfyToken, collectionController.createCollection)

app.put('/api/like', veryfyToken, likeController.createLike)

app.delete('/api/like', veryfyToken, likeController.deletelike)
// create form contact us
app.post('/api/contactus', contactusController.createForm)

// getform contact us need id and name
app.get('/api/contactus', contactusController.createForm)

// registrasi required username, email and password
app.post('/api/user/registration', userController.createUser, notificationController.singleCreateNotification, userTokenController.createdTokenDB)

// authorisasi required email and password
app.post('/api/user/authorization', userController.getUserValidation, userTokenController.createdTokenDB)

// validasi token localstorage required only token
app.post('/api/user/validation', veryfyToken,  (req, res)=>{
    return res.status(200).json({
        status: "success",
        message : 'logged'
    })
})

// get all country name list no need request body just api
app.get('/api/countrys', countryController.getCountrysList)

// get all developer list no need request body just api
app.get('/api/developers', developerController.getDevList)

// getting user's data profile like (imagedata , userdata, followerdata) required (userId, imageId, direction <for image direction>, )
app.get('/api/user/profile', userController.getDataUser, countryController.getCountryNameById, imageController.getUserImages, followerController.countFollowerAndFollowed , (req, res) =>{
    res.status(200).json({
        datauser : req.userdata,
        dataimage : req.imagedata,
        datafollower : req.countfollowed,
        datafollowed : req.countfollower
    })
})

// upload image, checking follower, make notification
app.post('/api/image', veryfyToken, upload.single('image'), followerController.geUserFollowerList, notificationController.bulkCreateNotification, (req, res) => {
    res.json({ message: 'berhasil' });
})

app.put('/api/following',veryfyToken, followerController.createFollower)
app.delete('/api/following',veryfyToken, followerController.deleteFollower)
// get all images limit 3
app.get('/api/image', imageController.getImages)

// get users limit 16 required startUserID and direction
app.get('/api/users', userController.getUsers)

// delete token by userId
app.delete('/api/user/unauthorization', userTokenController.deleteTokenDB)

// get notifacation
app.get('/api/notification', veryfyToken, notificationController.getNotification )

// message have 5 route in 2 action

//required messageRoomId, senderuserId, receiverUserId, message
//required getmessage have 3 route getListMessage, getStartMessage and getMessageWithDirection
app.get('/api/message',veryfyToken, messageController.getMessage)

// createMessage have 2 route : createroom and createmessage
// required startMessageId, messageRoomId, direction, message 
app.post('/api/message' ,veryfyToken, messageController.createMessage, notificationController.singleCreateNotification)


// // app.post('/api/user', userController.createUser)

// app.get('/api/user', (req, res) => {
//     userController.getUser(req, res, 'next')
// })
    
// app.get('/api/user/next', (req, res) => {
//     userController.getUser(req, res, 'next')
// })
// app.get('/api/uservalidation', userController.getUserValidation)
// app.get('/api/users', userController.getUsers)
// app.post('/api/user', userController.createUser)
// app.get('/api/listfollowers',userController.getListFollowers)
// app.get('/api/listfollowers',userController.getListFollowed)
// app.post('/api/follower', userController.createFollower)
// app.post('/api/formcontactus', userController.createFormContactUs)
// app.get('/api/country', userController.getCountrysList)
// app.get('/api/notification',userController.getNotifications)
// app.get('/api/image/detail', userController.getUserImgDetail)
// app.get('/api/image/', userController.getUserImgs)
// app.put('/api/image', userController.createImageRecord)










// app.get('/api/imgaes/next', (req, res) => {
//     userController.getImgs(req, res, 'Forward')
// })
// app.get('/api/images/previouse', (req, res) => {
//     userController.getImgs(req, res, 'Backward')
// })

sequelize.authenticate().then(() => {
    console.log('Connected with database')
})
    .catch((err) => {
        res.status(500).json({message: err})
        console.log('Something went wrong')
})

sequelize.sync({}).then(() => {
    console.log('Connected with DDl Database Model ORM')
}).catch((err) => {
    console.log('It going wrong with connection fiture DDL in Database Connection', err)

})

app.listen(PORT, () =>{
    console.log('Server running in PORT :', PORT)
})