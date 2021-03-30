import React, {useState} from 'react'
import './country-search.scss';


  







export default function CountrySearch({data}) {

     
    return (
        
        <div>
           
            <h2>Country Search</h2>
            <input className="search-input" type="text" />
            <button className="search-button">search</button>
            <div className="list-container">
          {
              data.map((element,index) => {
                 return <div className="list-object">
                   <span className="list-data">{index + 1}</span>  
                 <span className="list-data">{element.country}</span>
                
                 </div>
              })
          }

            
            
           

    


            </div>
            
        </div>
    )
}
