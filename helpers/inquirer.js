const inquirer = require('inquirer');
require('colors');


//inquirer nos pide agregarle nuestras preguntas en forma de un arreglo dentro de un objeto

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea',
            },
            {
                value: '2',
                name: '2. Mostrar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar tareas'
            },
            {
                value: '0',
                name: '0. salir'
            },
        ]
    }
];


//Esta es la función que imprime el menú pirncipal, esta función se exporta al archivo principal, app.js
const inquirerMenu = async () => {

    console.clear()

    console.log('======================'.green);
    console.log(' selecione una opción '.green);
    console.log('======================\n'.green);

    const { opcion } =  await inquirer.prompt(preguntas)

    return opcion;

}




const pausa =  async () => {

    const confirmarOpcion = [{
        type: 'input',
        name: 'confirmar',
        message: `Presione ${'ENTER'.green} para confirmar`
    }]

    console.log('\n')

    await inquirer.prompt(confirmarOpcion)


}


// 3. Esta función se ejecuta cuando el usuario selecciona la opción "Crear tarea" , recibe un input con la descripción de la tarea nueva, esta función se exporta al archivo app.js

const leerInput = async (message)  => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate (value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}



module.exports = {
    inquirerMenu, 
    pausa,
    leerInput
}