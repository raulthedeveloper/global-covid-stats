import React from 'react'
import { Line } from 'react-chartjs-2';

export default function DonutGraph(props) {
    return (
        <div>

            <Line
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
                    }
                }}
    />

    
        </div>
    )
}
