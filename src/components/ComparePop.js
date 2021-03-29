import React from 'react'
import { statistics } from '../api/Statistics'
import Doughnut from './graphs/DonutGraph'

export default function ComparePop() {
    return (
        <div>
            <h2>Compare Population</h2>
            <Doughnut chartData={data} location="USA" legendPosition="bottom"/>
        </div>
    )
}

let  data = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
      data: [2478,5267,734,784,433]
    }]
  }
