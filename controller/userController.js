// const {users, followers, collections, contactus, countrys, likes, images, messages, notifications, userToken} = require('../model/userModel')

// // Status response back only { Success, Created, Failed and Not Found}  
// // Success code is 200, Failed code status is 400 and Not Found code status is 404
// // buat di server .jsnya ulang lagi
const { signToken } = require('../Middleware/authMiddleware')
const { Op, where } = require('sequelize')
const { users } = require('../model/userModel')
const {domain} = require('../config/domain')

const createUser = async (req, res, next) => {
    try {
        const {username , email, password} = req.body
        console.log(username, email, password)
        const validation = await getUserValidationForGetId(email, password)
        if(validation.id){
            console.log('email already exist')
            return res.status(400).json({message : 'Email already registered'})
        }
        const newUser = await users.create({
            id : '', 
            username : username,
            email : email, 
            password : password
        })
        const token = signToken({id : newUser.id, username : newUser.username, role : 'user'})
        req.token = token
        req.userId = newUser.id
        req.username = newUser.username
        req.photoprofile = newUser.photo_profile
        req.message = 'user created successfully'
        return next()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const getUserValidationForGetId = async (email, password) => {
    try {
        const result = await users.findOne({
            where:{  
                email: email
            }, attributes : ['id', 'password'],
        })
        if(result){
            const validationPassword = result.password === password? true : false;
            if(validationPassword){
                return result
            }
        }
       return 'error'
    } catch (error) {
        console.log(error)
        return 'error'
    }
}

const getUserValidation = async (req, res, next) => {
    try {
        const {email, password} = req.body
        console.log('=============================')
        console.log(req.query.email, req.body.password, '=========')
        if(!email || !password){
            console.log('=============================5')
            return res.status(400).json({
                status : "error",
                message : 'email or password is required'
            })
        }
        console.log('=============================2')
        console.log(email, password)
        const validation = await getUserValidationForGetId(email, password)
        console.log(validation.id,'====validasi====')
        if (validation.id){
            const result = await users.findOne({
                where:{  
                    id: validation.id 
                }, attributes : ['id','username','photo_profile'],
            })
            console.log(result.username)
            const token = signToken({id: validation.id, username: result.username, role : 'user'})
            req.token = token
            req.userId = validation.id
            req.username = result.username
            req.photoprofile = result.photo_profile
            req.message = 'user successfully loged'
            console.log("error kah============================")
            return next()
        }
        res.status(404).json({
            status: 'not found',
            message : 'email or password is havent registerd'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}
// Mendapatkan data user pribadi
const getDataUser = async (req, res, next) => {
    try {
        console.log(req.query.userId ,'-=====')
        const userId = req.query.userId
        console.log(req.body.userId, '=======')
        if (!userId) {
            return res.status(400).json({
                status : 'failed',
                message : 'userId is required'
            })
        }
        const result = await users.findOne({
            where : {
                id: userId
            },
            attributes : ['id', 'username', 'photo_profile','country', 'professi','created','facebook','instagram','x','whatsapp','youtube']
        })
        if (result) {
            console.log(result)
            req.userdata = result
            return next()
        }
        res.status(404).json({
            status: 'failed',
            message: 'User is not found'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

const getUsers = async (req, res) => {
    const { startUserId, direction } = req.query
    if (!startUserId || !direction){
        return res.status(400).json({message: 'startUserId or direction is required'})
    }
    const operator = direction === 'forward'? Op.gte : Op.lte;
    const order = direction === 'forward'? 'DESC' : 'ASC';
    try {
        const result = await users.findAll({
            where:{
                id : {
                    [operator] : startUserId
                }
            },    
            attributes : ['id', 'username', 'photo_profile'],
            limit: 16
        })
        const isLast = await users.findAll({
            where : {
                id : {
                    [operator] : startUserId
                }
            }, 
            attributes : ['id'],
            order : [['id', order]],
            limit : 17
        })
        const array = result.map(user => ({
            id : user.id,
            username : user.username,
            photo : user.photo_profile? `${domain}/image/${user.id}/profile.jpg` : '' 
        }))
        const isLastResult = isLast.length < 17 ;
        res.status(200).json({
            isLast : isLastResult,
            result : array
        })
    } catch (error) { 
        res.status(500).json({
            messages : 'Internal server error'
        })
    }
} 

const EmailValidation = async (req, res) => {
    try {
        const { email } = req.query
        const validation = users.findOne({
            where : {
                email : email
            }
        })
        if (validation) {
            return res.status(200).json({status : 'success', email : email})
        }
        return res.status(200).json({status : 'failed'})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}
    
const UpdateNewUserPassword = async (req, res) => {
    try {
        const {newPassword } = req.query
        if (!newPassword) {
            return res.status(400).json({message: 'password is required'})
        }
        const validation = users.findOne({
            where : {
                email : email,
                password : newPassword
            }
        })
        if (validation) {
            return res.status(400).json({message : 'please input new password'})
        }
        const user = findOne({
            where : {
                email : email
            }
        })       
        await user.update({password : newPassword})
        await user.save()
        return res.status(200).json({message : 'update new password sucessfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status : 'error',
            message : 'internal was error'})
    }
}

module.exports = { createUser, getUserValidation, getDataUser ,getUsers, EmailValidation, UpdateNewUserPassword}


// const getUserImgs = async (req, res) => {
//     try {
//         const { userId, imageId, idImgStart } = req.query
//         const result = images.findAll({
//             where:{
//                 id : imageId,
//                 user_id : userId,
//                 attributes : [''],
//                 limit: 3
//          }
//         })
//         res.status(200).json(result)
//     } catch (error) { 
//         res.status(500).json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 

// // function to retrieve an image from image table based onthe provided image id
// // The parameter needed is image id with query imageId 
// // The return of function is JSON 
// const getImgs = async (req, res) => {
//     const { imageId, direction } = req.query
//     if (!imageId || !direction){
//         return res.status(400).json({message: 'imageId or direction is required'})
//     }
//     const operator = direction === 'forward'? Op.gte : Op.lte;
//     const order = direction === 'forward'? 'DESC' : 'ASC';
//     try {
//         const result = await images.findAll({
//             where:{
//                 id : {
//                     [operator] : imageId
//                 }
//             },    
//             attributes : ['id','user_id', 'image_name', 'description'],
//             limit:3
//         })
//         const isLast = await images.findAll({
//             where : {
//                 id : {
//                     [operator] : imageId
//                 }
//             }, 
//             attributes : ['id'],
//             order : [['id', order]],
//             limit : 4
//         })
//         const isLastResult = isLast.length < 4 ;
//         res.status(200).json({
//             isLast : isLastResult,
//             result : result
//         })
//     } catch (error) { 
//         res.status(500).json({
//             messages : 'Internal server error'
//         })
//     }
// } 

// const getUserImgDetail = async (req, res) => {
//     try {
//         const { userId, imageId } = req.query
//         const result = await images.findAll({where : {id : imageId,user_id : userId}}) 
//         res.status(200).json(result)
//     } catch (error) { 
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 

// const getCollection = async (req, res) => {
//     try {
//         const {userId, } = req.query
//         const result = await collections.findAll({
//             where : {
//                 user_id : userId 
//             }, attributes : ['collected_user_id','image_id']
//         })
//         res.status(200).json(result)
//         // Perbaiki Lagi
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 

// const getCountrysList = async (req, res) => {
//     try {
//         const {} = req.query
//         const results = await countrys.findAll()
//         res.status(200).json(results)
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 

// const getNotifications = async (req, res) => {
//     try {
//         const { userId } = req.query
//         const results = await notifications.findAll({
//             where: {
//                 user_id : userId
//             }, attributes : ['title', 'message', 'timestamp']})
//             res.status(200).json(results)
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 

// const getCountFollowers = async (req, res) => {
//     try {
//         const { userId } = req.query
//         const { count, row } = await followers.findAndCountAll({
//             id_followed_user : userId
//         })
//         res.status(200).json(count)
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// }

// const getCountFolloweds = async (req, res) => {
//     try {
//         const { userId } = req.query
//         const { count, row } = await followers.findAndCountAll({
//             where : {
//                 id_follower_user:userId
//             }
//         }) 
//         res.status(200).json(count)
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 

// const getListFollowers = async (req, res) => {
//     try {
//         const { userId } = req.query
//         const result = await followers.findAll({
//             where: {
//                 id_followed_user: userId
//             },attributes : ['id_following_user']
//         }) 
//         res.status(500).json(result)
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 
// const getListFollowed = async (req, res) => {
//     try {
//         const { userId } = req.query
//         const result = await followers.findAll({
//             where : {
//                 id_followed_user : userId
//             }
//         })
//         res.status(200).json(result) 
//         // 
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 
// const getLike = async (req, res) => {
//     try {
//         const { userId, imageId } = req.query
//         const result = await likes.findAll({
//             liked_by_user_id:userId,
//             image_id:imageId
//         })
//         res.status(200).json({
//             status: 'Found',
//             message: `userId : ${userId} Liked Image with imageId : ${imageId}`
//         })
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// }
// const getLastImage = async (req, res) => {
//     try {
//         const { userId, imageName } = req.query
//         const result =  await images.findOne({
//             where : {
//                 user_id: userId, image_name : imageName
//             }, order : [['image_id', 'DESC']]
//         })
//         if (result === 1) {
//             return res.status(200).json({
//                 status : 'Found'
//             })
//         }
//         res.status(300).json({
//             status : 'Not found'
//         })
//     } catch (error) {
        
//     }
// }

// const validationImageName = async (req, res) => {
//     try {
//         const userId = req.query.userId
//         const imageName = req.query.imageName
//         const result = await images.findAll({
//             where : {
//                 user_id : userId, image_name : imageName
//             }
//         })
//         if (result >= 1) {
//             return res.status(200).json({
//                 status : 'image name more than 1'
//             })}
//         res.status(200).json({
//             status : 'image name not found'
//         })
//     } catch (error) {
        
//     }
// }

// const createNotifRecord = async (req, res) => {
//     try {
//         const {} = req.query;
//         result = await notifications.create({})
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// }
// const createImageRecord = async (req, res) => {
//     try {
//         const userId = req.body.userId;
//         const imageName = req.body.imageName;
//         console.log(req.body.userId);

//         const validationName = await images.findOne({
//             where: { user_id: userId, image_name: imageName },
//             order: [['id', 'DESC']]
//         });

//         if (!validationName) {       
//             console.log('masuk 1')         
//             let lastId = await images.findOne({
//                  order: [['id', 'DESC']]
//             });
//             let newLastId = lastId ? lastId.id + 1 : 1; 
//             images.create({id : newLastId ,user_id : userId, image_name : imageName})

//             return newLastId
//         }
//         console.log('masuk2')
//         return validationName
//     } catch (error) {
//         res.status(404).json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 
// const createMessageRecord = async (req, res) => {
//     try {
//         const {} = req.query;
//         result = await messages.create({})
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 
// const createFormContactUs = async (req, res) => {
//     try {
//         const {} = req.query;
//         result = await contactus.create({

//         })
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 
// const createFollower = async (req, res) => {
//     try {
//         const { userId ,idUserFollowed} = req.query;
//         result = await followers.create({id : '',id_following_user: userId ,id_followed_user : idUserFollowed})
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// } 
// const createCollection = async (req, res) => {
//     try {
//         const { userId, iduserCollected , imageId } = req.query;
//         result = await collections.create({
//             where : {
//                 user_id: userId, collected_user_id : iduserCollected, image_id : imageId
//             }
//         })
//     } catch (error) {
//         res.status(404).json({
//             status : 'Failed',
//             messages : error
//         })
//     }
// }

// const deleteFollower = async (req, res) => {
//     try {
//         const {userId, idUserFollowed} = req.query;
//         result = await followers.destroy({
//             where:{
//                 id_following_user:userId, id_followed_user:idUserFollowed
//             }})
//         if(result === 0){
//             return res.status().json({
//                 status : 'Not Found',
//                 messages : 'Record Not Found'
//             })
//         }
//         res.status(200).json({
//             status :'success',
//             messages: `id user :${userId} Success unfollow user with id${idUserFollowed}`
//         })
//     } catch (error) {
//         res.status().json({
//             status : 'Failed',
//             messages : 'Failed Unfollow or Deleting record'
//         })
//     }
// }

// const deleteToken = async (user_id, token) => {
//     try {
        
//     } catch (error) {
        
//     }
// }

// module.exports = { 
//     createUser, 
//     getUserValidation,
//     getUsers, 
//     getUser, 
//     getImgs,
//     getUserImgs,
//     getUserImgDetail,
//     getCountrysList,
//     getCollection,
//     getLike,
//     getNotifications,
//     getCountFollowers,
//     getCountFolloweds,
//     getListFollowed,
//     getListFollowers,
//     createNotifRecord,
//     createImageRecord,
//     createFormContactUs,
//     createFollower,
//     createMessageRecord,
//     createCollection,
//     deleteFollower,
//     getLastImage,
//     validationImageName

// }