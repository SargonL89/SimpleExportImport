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
        callback('Error en la solicitud: ', error);
    });
};

function miCallback(resultado, error) {
    if (resultado) {
        console.log("El resultado es:", resultado)
    } else {
        console.log("Error en la búsqueda:", error)
    }
};

module.exports = {
    buscarUsuario,
    miCallback
};