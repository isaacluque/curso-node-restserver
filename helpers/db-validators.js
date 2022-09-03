const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') =>{
    const existeROL = await Role.findOne({rol});
    if(!existeROL){
           throw new Error(`El rol ${rol} no esta registrado en la base de datos.`);
    }
};

const emailExiste = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
        if (existeEmail) {
            throw new Error(`El correo: ${correo}, ya esta registrado.`)
        }
};

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);
        if (!existeUsuario) {
            throw new Error(`El id no existe ${id}.`)
        }
};


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}