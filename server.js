const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('../config/config')
const userController = require('../controller/userController')

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.get('/api/user', userController.getUser)
app.get('/api/users', userController.getUsers)
app.post('/api/user', userController.createUser)
app.get('/api/listfollowers',userController.getListFollowers)
app.get('/api/listfollowers',userController.getListFollowed)
app.post('/api/follower', userController.createFollower)
app.post('/api/formcontactus', userController.createFormContactUs)
app.get('/api/country', userController.getCountrysList)
app.get('/api/notification',userController.getNotifications)
app.get('/api/image/detail', userController.getUserImgDetail)
app.get('/api/image', userController.getUserImgs)
app.put('/api/image', userController.createImageRecord)

sequelize.authenticate().then(() => {
    console.log('Connected with database')
})
    .catch((err) => {
        res.status(500).json({message: err})
        console.log('Something went wrong')
})

sequelize.sync({force:true}).then(() => {
    console.log('Connected with DDl Database Model ORM')
}).catch((err) => {
    console.log('it going wrong with connection fiture DDL in Database Connection')

})

app.listen(PORT, () =>{
    console.log('Server running in PORT :', PORT)
})