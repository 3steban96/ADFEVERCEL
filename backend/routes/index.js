const {Router} = require('express');
const { postLogin, postImage, upload, getImages,deleteImg } = require('../controllers/controllers');
const multer = require('multer');


const router = Router();

router.post('/login', postLogin)
// router.post('/upload', upload.single('imagen'), postImage);
router.post('/upload', upload.array('imagen', 10), postImage);
router.get('/images',getImages);
router.delete('/delete/:imageName', deleteImg);

module.exports= router