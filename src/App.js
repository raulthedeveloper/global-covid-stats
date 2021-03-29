import './scss/App.scss';
import SingleValue from './components/SingleValue'
import ComparePop from './components/ComparePop'
import CountrySearch from './components/CountrySearch/index'
import Calendar from './components/Calendar'
import HistoryTotals from './components/HistoryTotals'
import MonthsCompare from './components/MonthsCompare'



function App() {
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

<CountrySearch/>
</div>

<div className="div9 widget"> 

<Calendar />
</div>
</div>
    </div>
  );
}

export default App;
