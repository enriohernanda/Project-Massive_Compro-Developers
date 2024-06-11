import axios from "axios";
const api = axios.create({
    baseURL : 'http://localhost:4000'
})


// get image detail required authstatus, token 
export const createImage = async (authstatus, formdata, token, name, description, image) => {
    try {
        const response = await api.post('/api/image',formdata, {params: {authstatus: authstatus ,token : token, imageName: name, imageDescription : description, image : image} })
        alert(`${response.data.message} :)`)
        return response.data
    } catch (error) {
        console.log(error)
        alert('Gagal mengupload gambar :(')
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
        alert(error.response.data.message)
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
