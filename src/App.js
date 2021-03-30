import './scss/App.scss';
import SingleValue from './components/SingleValue'
import ComparePop from './components/ComparePop'
import CountrySearch from './components/CountrySearch/index'
import Calendar from './components/Calendar'
import HistoryTotals from './components/HistoryTotals'
import MonthsCompare from './components/MonthsCompare'
import axios from 'axios';
import { useEffect, useState } from 'react'






   
 


 function App() {
const [allCountries, setallCountries] = useState(Array)


 

   useEffect(() => {
      const options = {
         method: 'GET',
         url: 'https://covid-193.p.rapidapi.com/statistics',
         headers: {
           'x-rapidapi-key': '52b459a4e2msh8fddfaf671beb59p14b298jsn42318c134a1e',
           'x-rapidapi-host': 'covid-193.p.rapidapi.com'
         }
       };
       
       axios.request(options).then(function (response) {
       setallCountries(response.data.response);
       })
       .catch(function (error) {
           console.error(error);
       });
    
   },[])


   
  return (
    <div className="App">

<div className="parent">
<div className="div1 widget"> 
<SingleValue title="New" classStyle="circle red" data="5555"/>
</div>

<div className="div2 widget"> 
<SingleValue title="Active" classStyle="circle blue" data="5555"/>
</div>


<div className="div3 widget">
<SingleValue title="Critical" classStyle="circle green" data="5555"/>
   </div>


<div className="div4 widget"> 
<SingleValue title="Recovered" classStyle="circle purple" data="5555"/>

</div>


<div className="div5 widget">
<HistoryTotals />

   </div>


<div className="div6 widget"> 
<ComparePop />
</div>

<div className="div7 widget">
<MonthsCompare />
   </div>

<div className="div8 widget"> 

<CountrySearch data={allCountries}/>
</div>

<div className="div9 widget"> 

<Calendar />
</div>
</div>
    </div>
  );
}

export default App;
