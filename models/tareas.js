const Tarea = require('./tarea')

class Tareas{

    constructor(){
        this._listado = {}
    }

    // 5. Este metodo recibe una descripción y manda a crear una nueva tarea a la cual le pasa una descripción como argumento.
    crearTarea(desc = ''){
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea
    }
}




module.exports = Tareas