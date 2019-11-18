const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require ('yargs').options({
    direccion:{  alias: 'd',
    desc: 'Direccion de la ciduad',
    demand: true
}
}).argv;

//console.log(argv.direccion);

// lugar.getLugar(argv.direccion)
// .then(console.log);

// clima.getClima(40,139)
// .then(console.log)
// .catch(console.log);
// url+api (headers): https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=San+Salvador
// Librerias peticiones = AXIOS(devuelve promesa) y REQUEST (devuelve callback)

//https://www.npmjs.com/package/request
//https://www.npmjs.com/package/axios
//https://rapidapi.com/dev132/api/city-geo-location-lookup
//

const getInfo = async (direccion)=>{

  try {
    const coord = await lugar.getLugar(argv.direccion);
    const temp = await clima.getClima(coord.lat,coord.lng);
    return `El clima de ${coord.direccion} es de ${temp}`;
  } catch (error) {
    return `No se pudo determinar el clima de ${coord.direccion}`;

  }

  
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);