const {Router} = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos');
const {esRoleValido,
       emailExiste,
       existeUsuarioPorId} = require('../helpers/db-validators');

const {userGET, 
       userPost, 
       userPut, 
       userDelete} = require('../constrollers/user');

const router = Router();

router.get('/', userGET);

router.post('/', [
       check('nombre', 'El nombre es obligatorio').not().isEmpty(),
       check('password', 'El password debe de ser mas de 6 letras').isLength({min: 6}),
       check('correo', 'El cooreo no es valido').isEmail(),
       check('correo').custom(emailExiste),
       // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROL']),
       check('rol').custom(esRoleValido),
       validarCampos
],userPost);

router.put('/:id', [
       check('id', 'No es un ID valido').isMongoId(),
       check('id').custom(existeUsuarioPorId),
       check('rol').custom(esRoleValido),
       validarCampos
], userPut);

router.delete('/:id', [
       check('id', 'No es un ID valido').isMongoId(),
       check('id').custom(existeUsuarioPorId),
       validarCampos,
],userDelete);


module.exports = router;