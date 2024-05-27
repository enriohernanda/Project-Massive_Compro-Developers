const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { images } = require('../model/userModel');
const imageController = require('../controller/imageController');
const { error } = require('console');

// Destination and Filename Function
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const userPath = req.decoded.id;
        const uploadPath = path.join(__dirname, '../uploads', `${userPath}`);
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename:  async function (req, file, cb, ) {
        try {
            // image Name First after image
            //  multer need req body
            console.log('Filename Function', req.imageName)
            console.log(req.query.imageName)
            console.log(req.body.imageName)
            const response = await imageController.createImageRecord(req)
            req.title = `${req.decoded.username} upload new image`
            req.message = `${req.decoded.username} upload new image`
            console.log(response.id, response)
            if (response.id) {     
                console.log('palanegekau')           
                cb(null, `${response.id}.jpg`);
            } else {
                console.log('error')
                cb(('image name id already exist'));
            }
        } catch (error) {
            console.log(error)
            cb('error');
        }
    }
});

const upload = multer({ storage: storage });
module.exports = upload;
