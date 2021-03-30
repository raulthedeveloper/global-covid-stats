import axios from 'axios';

export async function statistics(){
  
const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'x-rapidapi-key': '52b459a4e2msh8fddfaf671beb59p14b298jsn42318c134a1e',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
  }
};

let res = await axios.request(options).then(function (response) {
return response.data.response;
})
.catch(function (error) {
    console.error(error);
});
    

return res;
}



