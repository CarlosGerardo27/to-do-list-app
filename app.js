require('colors');
const { 
        inquirerMenu, 
        pausa,
        leerInput 
        } = require('./helpers/inquirer');
const Tareas = require('./models/tareas')


// 1. Esta función es la función principal, la cual se usa para invocar a todas las demás. 
const main = async () =>{
    
    let opt = '';

    const tareas = new Tareas()

    do {
        
        // 2. Esta función inquireMenu() imprime el menú principal
        opt = await inquirerMenu();

        switch (opt) {
            case '1':

                // 4.  Se crea una constante llamada desc, la cual almacena la función  leerIInput y el input que recibio en la descripción 
                const desc = await leerInput('Descripción: ');

                //6 . tareas.crearTarea ( desc ), este metodo se desprende de la clase Tareas y cuando se invoca manda una descipción a la nueva tarea, las nuevas tareas vienen de la clase Tarea. 
                tareas.crearTarea( desc )
            
            break;

            case '2':
                console.log(tareas.listadoArr);
    
        }
         
        await pausa()
        
    } while (opt !== '0' );

}

main()