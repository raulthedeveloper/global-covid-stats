import axios from 'axios';

function history(){
    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/history',
        params: {country: 'usa', day: '2020-06-02'},
        headers: {
          'x-rapidapi-key': '52b459a4e2msh8fddfaf671beb59p14b298jsn42318c134a1e',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

export default history