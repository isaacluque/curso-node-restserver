const { request, response, query } = require('express');

const userGET = (req = request, res = response) => {

    const {q, nombre = 'Sin nombre', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });

};

const userPost = (req, res = response) => {
    
    const body = req.body;

    res.json({
        msg: 'post API - userPost',
        body
    });
};

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
};

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
};

module.exports = {
    userGET,
    userPost,
    userPut,
    userDelete
}