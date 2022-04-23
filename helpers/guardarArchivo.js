const fs = require('fs');

const archivo = './db/data.json';

const guardarInfo = ( data ) => {


    //pasamos la data por el metodo JSON.stringify () para que la función writefilesync pueda guardarla ya que uno de los requerimientos de la función es que la información que se le pase sea un string. 
    fs.writeFileSync( archivo, JSON.stringify(data)  );

}

const leerDB = () => {
    //Si el archivo no ! existe envia un valor null, este metodo existsSync ( requiere que le pasemos la ruta del archivo )
    if ( !fs.existsSync(archivo) ){
        return null
    }

    // si el archivo  existe es momento de leer la data, readFileSync (requiere la ruta del archivo, la codificación del archivo)
    const info = fs.readFileSync( archivo , { encoding: 'utf-8' }  )
    
    //parseamos la información de modo que cuando hagamos la consulta de leerDB se nos regrese de nueva cuenta un objeto en lugar del archivo JSON que creamos en guardarInfo()

    const data =JSON.parse( info );
    console.log( data )

    return data;
}


module.exports = {
    guardarInfo,
    leerDB
}