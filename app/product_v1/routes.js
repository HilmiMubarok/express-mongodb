const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/' });
const productController = require('./controller');

router.get('/product', productController.index);
router.get('/product/:id', productController.show);
router.post('/product', upload.single('image'), productController.create);
router.put('/product/:id', upload.single('image'), productController.update);
router.delete('/product/:id', productController.destroy);

module.exports = router;
