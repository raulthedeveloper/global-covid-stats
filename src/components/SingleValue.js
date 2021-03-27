import React from 'react'

const topData = {
    color:'#ffffffa6',
    fontSize: '2.5rem'
}

// const flex = {
//     display:'flex',
//     justifyContent:'space-around',
//     flexFlow:"row"
// }

export default function SingleValue({title,classStyle,data}) {
    return (
        <div> 
            <div>
            <div className={classStyle}></div>
            <h2>{title}</h2>
            </div>
            
            <span style={topData}>{data}</span>
        </div>
    )
}
