const fs = require('fs').promises;
const fss = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

const config = JSON.parse(fss.readFileSync('login.json'));

async function postLogin(req, res) {
    try {
        const user = req.body.user;
        const password = req.body.password;

        const storedPasswordHash = config.users[user];

        if (storedPasswordHash) {
            const passwordsMatch = await bcrypt.compare(password, storedPasswordHash);

            if (passwordsMatch) {
                
                res.status(200).json({
                    message: 'Autenticación exitosa'
                });
            } else {
                res.status(401).json({
                    message: "Usuario o contraseña incorrectos"
                });
            }
        } else {
            res.status(401).json({
                message: "Usuario o contraseña incorrectos"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error en el servidor'
        });
    }
}

//////// uploads-Img
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../FrontEnd/assets/uploads') 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
});
const upload = multer({ storage });

async function postImage(req, res, cb) {
  try {
    const uploadedImages = req.files;

    if (!uploadedImages || uploadedImages.length === 0) {
      return res.status(400).json({ error: 'Por favor, seleccione al menos una imagen válida.' });
    }

    if (typeof cb === 'function') {
      cb(req, res, uploadedImages);
    } else {
      res.status(200).json({ message: 'Imágenes subidas con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


async function readImagesDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    return files.filter((file) => {
      const extname = path.extname(file).toLowerCase();
      return extname === '.jpg' || extname === '.jpeg' || extname === '.png' || extname === '.gif' || extname === '.webp';
    });
  } catch (error) {
    console.error('Error al leer la carpeta de imágenes:', error);
    throw error;
  }
}

async function getImages(req, res) {
  try {
    const directoryPath = path.join(__dirname, '../../FrontEnd/assets/uploads');
    const imageFiles = await readImagesDirectory(directoryPath);

    const imageUrls = imageFiles.map((file) => `/uploads/${file}`);
    res.json(imageUrls);
  } catch (error) {
    res.status(500).send('Error al leer la carpeta de imágenes');
  }
}
async function deleteImg(req, res) {
  try {
    const imageName = req.params.imageName; 
    const directoryPath = path.join(__dirname, '../../FrontEnd/assets/uploads');
    
    const imagePath = path.join(directoryPath, imageName);
    console.log("ruta", imagePath)
    try {
      await fs.access(imagePath); 
      await fs.unlink(imagePath); 
      res.json({ message: 'Imagen eliminada con éxito' });
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.status(404).json({ error: 'La imagen no existe' });
      } else {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la imagen' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la imagen' });
  }
}
module.exports = { postLogin, postImage,upload,getImages,deleteImg };

