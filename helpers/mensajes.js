require('colors')


const mostrarMenu = ()=>{
    
    console.clear()

    console.log('======================'.green);
    console.log(' selecione una opción '.green);
    console.log('======================\n'.green);

    console.log(`${'1.'.green} Crear nueva tarea`)
    console.log(`${'2.'.green} Listar tareas`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar tareas`)
    console.log(`${'6.'.green} Borrar una tarea`)
    console.log(`${'0.'.green} Salir \n`)
    
    const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout

    });

    readline.question('Seleccione una opción:', (opt)=>{

        readline.close();
    })

}


const pausa = ()=>{

    const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout

    });

    readline.question(`\nPresione ${'ENTER'.cyan} para continuar \n`, (opt)=>{
        readline.close();
    })

}



module.exports = { 
    mostrarMenu , pausa
}

