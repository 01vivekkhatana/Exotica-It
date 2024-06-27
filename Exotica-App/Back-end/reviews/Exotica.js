const axios = require("axios");

let ID =  "ChIJ8Wa8Y53vDzkR9AlWjnmaHTI";
const api_key = "AIzaSyDXjRAnWxMXaF74zirPJ50rW8g_9z3UHi0";

let config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${ID}&key=${api_key}`,
    headers: {},
};

axios(config)
.then(function(response){
    console.log(JSON.stringify(response.data));
})

.catch(function(error){
    console.log(error);
});               
