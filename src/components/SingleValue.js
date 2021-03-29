import React from 'react'

const topData = {
    color:'#ffffffa6',
    fontSize: '2.5rem'
}


const labelContainer = {
    display:'flex',
    flexFlow:'row'
}

const h2 = {
    margin:'0',
    marginLeft:'.75rem'
}



export default function SingleValue({title,classStyle,data}) {
    return (
        <div> 
            <div style={labelContainer}>
            <div className={classStyle}></div>
            <h2 style={h2}>{title}</h2>
            </div>
            
            <span style={topData}>{data}</span>
        </div>
    )
}
