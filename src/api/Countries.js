import axios from 'axios';

function countries(){
    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/countries',
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

export default countries