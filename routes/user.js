const {Router} = require('express');
const {userGET, 
       userPost, 
       userPut, 
       userDelete} = require('../constrollers/user');

const router = Router();

router.get('/', userGET);

router.post('/', userPost);

router.put('/:id', userPut);

router.delete('/', userDelete);


module.exports = router;