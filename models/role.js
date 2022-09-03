const {Schema, model, models} = require('mongoose');

const RoleSchema = Schema({
    rol:{
        type: String,
        require: [true, 'El rol es obligatorio']
    }
});

module.exports = model('Role', RoleSchema);