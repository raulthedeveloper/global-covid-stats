import React from 'react'
import { Bar } from 'react-chartjs-2';


export default function BarGraph(props) {
    return (
        <div>
             <Bar
                data={props.chartData}
                options={{
                    responsive:true,
                    maintainAspectRatio:true,
                    title:{
                    display:props.displayTitle,
                    text:'Data Vs Population',
                    fontSize:25,
                    },
                    legend:{
                    display:props.displayLegend,
                    position:props.legendPosition
                    },
                    scales: {
                        xAxes: [{
                          stacked: true,
                          gridLines: {
                            display: false,
                          }
                        }],
                        yAxes: [{
                            stacked: true,
                            ticks: {
                              beginAtZero: true,
                            },
                            type: 'linear',
                          }]
                        },
                }}
    />
        </div>
    )
}
