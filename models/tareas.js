const Tarea = require('./tarea');

class Tareas{

    constructor(){
        this._listado = {}
    }

    cargarTareaFromArray ( tareas = [] ){

        tareas.forEach( tarea => {

            this._listado[tarea.id] = tarea

        } )

    }

    // 5. Este metodo recibe una descripción y manda a crear una nueva tarea a la cual le pasa una descripción como argumento.
    crearTarea(desc = ''){
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea
    }
    /*  intentaré explicar lo mejor que pueda, aquí el código:

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }
Tenemos una función que recibe como parámetro un arreglo (tareas). Ese arreglo lo recorremos con un forEach que itera o reproduce sobre cada elemento que existe en el arreglo.

Cada elemento de ese array lo obtenemos como parámetro llamado (tarea), y deseamos agregarlo a un objeto llamado (_listado).

Los objetos contienen propiedades con formato key:value, por ejemplo:

{ id : '123456789'}
Entonces, al momento de agregar una nueva propiedad al objeto, debemos asignarle un key unico, en este caso, el elemento del array contiene un id que es único y es el que utilizamos como key.

this._listado[tarea.id] = tarea;
En esta declaración , podemos imaginarnos algo así:

this._listado['123456789'] = {id: '123456789', desc: 'dsadsd', completadoEn: null };
Con esto se crea la nueva propiedad en _listado y a la vez se le asigna valor. */

    listadoCompleto(){
        console.log('\n')
        this.listadoArr.forEach( ( tarea, i ) => {

            const idx = ` ${i + 1}`.green // le sumo uno al indice (i) para que la cuenta comience en 1 y no en 0
            const { _description, _completado } = tarea 
            const estado = ( _completado )
                            ? 'Completado'.green
                            : 'Pendiente'.red;  
            console.log( `${idx}. ${_description} :: ${estado}` )

        } )

    }

    get listadoArr(){
        const listado = []
        
        Object.keys(this._listado).forEach( key =>{
            const tarea = this._listado[key];
            listado.push(tarea)
           
        })

        return listado
    }
}




module.exports = Tareas