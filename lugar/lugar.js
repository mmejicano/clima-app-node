const axios = require ('axios');

const getLugar = async(dir)=>{

    const encodeUl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUl}`,
        headers: {'x-rapidapi-key': '362385c86fmshbe308f8a519d1b3p122a21jsn0ca38dc903b8'}
      });
      
    
    const resp = await instance.get();
      if(resp.data.Results.length===0){
          throw new Error(`No hay resultados para ${dir}`);

      }
      const data= resp.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const lng = data.lon;

      return {
          direccion,
          lat, lng
      }
}

module.exports ={
    getLugar
}