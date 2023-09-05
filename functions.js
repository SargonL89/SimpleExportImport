function buscarUsuario(ubicacion, callback) {
    let resultado = '';
    let error = 'Usuario no encontrado';
    fetch('https://randomuser.me/api/')
    .then(Response => Response.json())
    .then(data => {
        if (data.results[0].location.country === ubicacion) {
            resultado = data.results[0].name;
        } else {
            buscarUsuario('Ukraine', callback)
        }
        callback(resultado, error);
    })
    .catch(error => {
        callback('F1. Error en la solicitud: ', error);
    });
};

function miCallback(resultado, error) {
    if (resultado) {
        console.log("F1. Resultado de buscar por ubicación:", resultado)
    } else {
        console.log("F1. Error en la búsqueda:", error)
    }
};


function buscarUsuario2(nombre, callback) {
    setTimeout(() => {
        const usuarios = [
            {id: 1, nombre: 'Fernandito'},
            {id: 2, nombre: 'Lucrecia'},
            {id: 3, nombre: 'Antonio'}
        ];
        const usuarioEncontrado = usuarios.find(usuario => usuario.nombre === nombre);
        if (usuarioEncontrado) {
            callback(null, usuarioEncontrado)
        } else {
            callback('Usuario no encontrado')
        }
    }, 1500);
};

function printInConsole(error, usuario) {
    if (error) {
        console.error('F2. Error en la búsqueda:', error)
    } else {
        console.log('F2. El resultado de la 2da función callback es:', usuario)
    };
};


function buscarUsuario3(usuario) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const usuarios = [
                {id: 1, nombre: 'Fernandito'},
                {id: 2, nombre: 'Lucrecia'},
                {id: 3, nombre: 'Antonio'}
            ];
            const usuarioEncontrado = usuarios.find(name => name.nombre === usuario);
        if (usuarioEncontrado) {
            resolve(usuarioEncontrado);
        } else {
            reject('No se ha encontrado el usuario')
        }}, 1000)
    });
};


module.exports = {
    buscarUsuario,
    miCallback,
    buscarUsuario2,
    printInConsole,
    buscarUsuario3
};