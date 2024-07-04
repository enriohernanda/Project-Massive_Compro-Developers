import axios from "axios";
const api = axios.create({
    // baseURL : 'http://localhost:5070'
    // baseURL : 'http://192.168.43.232:5070'
    baseURL : 'https://compro-dev.productsofwebdevuiuxceleratessib6.site'
    // Change baseurl to  another host like localhost or local network address to assure that website work properly 
})


// get image detail required authstatus, token 
export const createImage = async (authstatus, formdata, token, name, description, image) => {
    try {
        const response = await api.post('/api/image',formdata, {params: {authstatus: authstatus ,token : token, imageName: name, imageDescription : description, image : image} })
        alert(`${response.data.message} :) `)
        return response.data
    } catch (error) {
        console.log(error)
        alert('Gagal mengupload gambar :( ')
    }
}


// get image detail required authstatus, imageId, userId or token
export const getimagedetail = async (authstatus, imageId, token, userid) => {
    try {
        console.log(authstatus)
        const userId = userid 
        const response = await api.get('/api/image/detail',  {params :{authstatus : authstatus, imageId : imageId, token : token, userId : userId}})
        return response.data
    } catch (error) {
        console.log(error)

    }
} 

// get image detail required authstatus, imageId, userId or token
export const createLike = async (authstatus, imageId, token) => {
    try {
        console.log(authstatus)
        const response = await api.put('/api/like',  {authstatus : authstatus, imageId : imageId, token : token})
        return response.data
    } catch (error) {
        console.log(error) 
    }
} 

export const deleteLike = async (authstatus, imageId, token) => {
    try {
        console.log(authstatus)
        const response = await api.delete('/api/like', {params :{authstatus : authstatus, imageId : imageId, token : token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// get image detail required authstatus, imageId, userId or token
export const countLike = async (userId) => {
    try {
        console.log("UserId Like : ",userId)
        const response = await api.get('/api/like', {params : {userId : userId}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

 

// get image detail required authstatus, imageId, userId or token
export const createCollection = async (authstatus, imageId, token) => {
    try {
        console.log(authstatus)
        // const response = await api.put('/api/collection',  { params :{authstatus : authstatus, imageId : imageId, token : token}})
        const response = await api.put('/api/collection',  {authstatus : authstatus, imageId : imageId, token : token})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const deleteCollection = async (authstatus, imageId, token) => {
    try {
        console.log("Image Id Collection  delete:",imageId)
        // const response = await api.put('/api/collection',  { params :{authstatus : authstatus, imageId : imageId, token : token}})
        const response = await api.delete('/api/collection',  {params :{authstatus : authstatus, imageId : imageId, token : token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// get all images limit 3 required imageId and direction
export const getImages = async (imageId, direction, limit) => {
    try {
        const response = await api.get('/api/image', {params : {direction : direction, imageId : imageId, limit : limit}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// get all images limit 3 required imageId and direction
export const getUserImagesByLatest = async (userId, imageId) => {
    try {
        console.log(userId)
        const response = await api.get('/api/user/image', {params : {userId : userId, imageId : imageId, direction : 'forward'}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const getUserCollectionImage = async (userId) => {
    try {
        const response = await api.get('/api/user/collection', {params : {userId : userId, direction : 'forward'}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// get all images limit 3 required imageId and direction
export const getProfile = async (authstatus, id) => {
    try {
        const userid = parseInt(id)
        console.log(authstatus, id,userid,'================')
        const response = await api.get('/api/user/profile', {params : {authstatus: authstatus, userId : userid, direction : 'forward', imageId : 1}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// get all users limit 16 required imageId and direction
export const getUsers = async () => {
    try {
        const startUserID = 1
        const response = await api.get('/api/user', {params : {startUserId : startUserID, direction : 'forward'}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// startMessageId = default 0, token, receiverUserId, massageRoomId 5 direction
export const getMassage = async (authstatus, messageRoomId, startMessageId,receiveruser,token) => {
    try {
        console.log("AuthStatus Get Message : " ,authstatus)
        const response = await api.get('/api/message',{ params : {authstatus : authstatus, messageRoomId : messageRoomId,
            startMessageId : startMessageId ,startMessageId : startMessageId,
            receiverUserId : receiveruser, token: token, direction : 'forward'}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const sendMassage = async (authstatus ,messageRoomId, receiverUserId ,message, token) => {
    try {
        const response = await api.post('/api/message', {authstatus  : authstatus ,receiverUserId : receiverUserId, message : message, messageRoomId : messageRoomId, token: token})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// create form contact us
export const createForm = async (username, email, message) => {
    try {
        console.log(username,email, message)
        const response = await api.post('/api/contactus', {params : {name : username, email : email ,message : message}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 


export const getUserProfile = async (username, email, message) => {
    try {
        const response = await api.post('/api/user/profile', {params : {username : username, email : email ,message : message}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const UpdateUserData = async (authstatus, instagram, youtube, facebook, professi, token) => {
    try {
        const response = await api.post('/api/user', {params : {authstatus : authstatus, instagram : instagram, youtube : youtube, facebook : facebook, professi : professi, token : token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const getNotification = async (authstatus, token, startNotificationId) => {
    try {
        const response = await api.get('/api/notification', {params : {authstatus : authstatus, token : token ,startNotificationId : startNotificationId}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const getFollowing = async (authstatus, followeduserid, token) => {
    try {
        const response = await api.get('/api/follower', {params : {authstatus : authstatus, followedUserId : (followeduserid ? followeduserid : 0 ), token : token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const getImageByName = async (imageName) => {
    try {
        const response = await api.get('/api/image/search', {params : {imageName : imageName}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const createFollower = async (authstatus, followeduserid, token) => {
    try {
        const response = await api.put('/api/follower', {authstatus : authstatus, followedUserId : followeduserid , token : token})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const deleteFollower = async (authstatus, followeduserid, token) => {
    try {
        const response = await api.delete('/api/follower', {params : {authstatus : authstatus, followedUserId : followeduserid , token : token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const mailValidation = async (userMail) => {
    try {
        console.log(userMail)
        const response = await api.post('/api/user/update-password/mail-validation', {userMail : userMail})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const tokenValidation = async (token) => {
    try {
        const response = await api.post('/api/user/update-password/token-validation', {tokenMail : token})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

export const updatePassword = async (token, newPassword) => {
    try {
        const response = await api.post('/api/user/update-password/password-validation', {tokenMail : token, newPassword : newPassword})
        return response.data
    } catch (error) {
        console.log(error)
        alert(error.data.message)
    }
} 

export const updateProfile = async (formdata, photo_profile, country, professi, instagram, facebook, youtube, token, authstatus) => {
    try {
        const response = await api.post('/api/user//update-profile',formdata, {params : {profile : photo_profile, country : country, professi : professi, instagram : instagram, facebook : facebook, youtube : youtube, token : token, authstatus : authstatus, name : "photo_profile" }})
        return response.data
    } catch (error) {
        console.log(error)
        alert(error.data.message)
    }
} 
