import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:4000'
})


// get image detail required authstatus, token 
export const createImage = async (formdata, token, name, description, image) => {
    try {
        const response = await api.post('/api/image',formdata, {params: {token : token, imageName: name, imageDescription : description, image : image} })
        alert(`${response.data.message} :)`)
        return response.data
    } catch (error) {
        console.log(error)
        alert('Gagal mengupload gambar :(')
    }
}

// get image detail required authstatus, imageId, userId or token
export const getimagedetail = async (authstatus, imageId, token) => {
    try {
        const response = await api.get('/api/imagedetail', {params : {authstatus : authstatus, imageId : imageId, token : token}})
        return response.data
    } catch (error) {
        console.log(error)
    }

} 

// get all images limit 3 required imageId and direction
export const getImages = async (imageId, direction) => {
    try {
        const response = await api.get('/api/imagedetail', {params : {direction : direction, imageId : imageId}})
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
        const response = await api.get('/api/users', {params : {startUserId : startUserID, direction : 'forward'}})
        return response.data
    } catch (error) {
        console.log(error)
    }
} 

// create form contact us
export const createForm = async (username, email, message) => {
    try {
        const response = await api.post('/api/contactus', {params : {username : username, email : email ,message : message}})
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
