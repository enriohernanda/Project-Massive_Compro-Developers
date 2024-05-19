const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { images } = require('../model/userModel');
const userController = require('../controller/userController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const userPath = req.body.idUser;
        const uploadPath = path.join(__dirname, '../uploads', `${userPath}`);
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename:  async function (req,  file, cb, ) {
        try {
            console.log('Hallo', 'response')
            const response = await userController.createImageRecord(req)
            console.log('Hallo', response.id)
            if (response.id) {                
                cb(('Image name already exsist'));
            } else {
                let lastId = await images.findOne({
                    order: [['id', 'DESC']]
                });
                console.log(lastId)
                let newLastId = lastId ? lastId.id + 1 : 1; 
                cb(null, `${newLastId}.jpg`);
            }
        } catch (error) {
            cb(error);
        }
    }
});

const upload = multer({ storage: storage });
module.exports = upload;
