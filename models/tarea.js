const { v4: uuidv4 } = require('uuid')

class Tarea {

    constructor(description){

        this.id = uuidv4()
        this._description = description;
        this._completado = null;

    }
}

module.exports = Tarea