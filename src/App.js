import './scss/App.scss';
import SingleValue from './components/SingleValue'
import ComparePop from './components/ComparePop'
import CountrySearch from './components/CountrySearch'
import Calendar from './components/Calendar'
import HistoryTotals from './components/HistoryTotals'
import axios from 'axios'



function App() {
  return (
    <div className="App">

<div class="parent">
<div class="div1 widget"> 
<SingleValue title="New" classStyle="circle red" data="5555"/>
</div>

<div class="div2 widget"> 
<SingleValue title="Active" classStyle="circle blue" data="5555"/>
</div>


<div class="div3 widget">
<SingleValue title="Critical" classStyle="circle green" data="5555"/>
   </div>


<div class="div4 widget"> 
<SingleValue title="Recovered" classStyle="circle purple" data="5555"/>

</div>


<div class="div5 widget">
<HistoryTotals />

   </div>


<div class="div6 widget"> 
<ComparePop />
</div>

<div class="div7 widget">
<h2>Bar Graph</h2>
   </div>

<div class="div8 widget"> 
<h2>Country Search</h2>
<CountrySearch/>
</div>

<div class="div9 widget"> 

<Calendar />
</div>
</div>
    </div>
  );
}

export default App;
