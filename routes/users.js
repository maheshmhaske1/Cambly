var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller')
const userEducation = require('../controller/userEdu.controller')
const { authenticate_user } = require('../middleware/auth')


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/create', userController.createUser)
router.post('/login', userController.login)
router.post('/is-found', userController.isUserExist)
router.post('/reset-password', userController.resetPassword)

router.post('/education/add',userEducation.add)
router.get('/education/get/:userId',userEducation.getAll)
router.get('/education/getById/:id',userEducation.get)
router.put('/education/update/:id',userEducation.update)
router.delete('/education/delete/:id',userEducation.delete)

module.exports = router;
