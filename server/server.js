const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/config')
const userController = require('./controller/userController')
const upload = require('./multer/upload')
const { routes } = require('../routes/routes')

// app.use(bodyParser.urlencoded({extended : true}))
app.use(express.urlencoded({extended : true}))
// app.use(bodyParser.json())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api', routes)

app.post('/api/image', upload.single('image'), (req, res) => {
    console.log('jalan')
    res.json({ message: 'berhasil' });
})
    
app.get('/api/user', userController.getUser)
app.get('/api/uservalidation', userController.getUserValidation)
app.get('/api/users', userController.getUsers)
app.post('/api/user', userController.createUser)
app.get('/api/listfollowers',userController.getListFollowers)
app.get('/api/listfollowers',userController.getListFollowed)
app.post('/api/follower', userController.createFollower)
app.post('/api/formcontactus', userController.createFormContactUs)
app.get('/api/country', userController.getCountrysList)
app.get('/api/notification',userController.getNotifications)
app.get('/api/image/detail', userController.getUserImgDetail)
app.get('/api/image/', userController.getUserImgs)
app.put('/api/image', userController.createImageRecord)

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
    console.log('it going wrong with connection fiture DDL in Database Connection')
})

app.listen(PORT, () =>{
    console.log('Server running in PORT :', PORT)
})