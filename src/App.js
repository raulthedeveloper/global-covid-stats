import './scss/App.scss';
import SingleValue from './components/SingleValue'

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
<h2>Historical Totals</h2>

   </div>


<div class="div6 widget"> 
<h2>Compare Population</h2>
</div>

<div class="div7 widget">
<h2>Bar Graph</h2>
   </div>

<div class="div8 widget"> 
<h2>Country Search</h2>
</div>

<div class="div9 widget"> 
<h2>Calendar</h2>
</div>
</div>
    </div>
  );
}

export default App;
