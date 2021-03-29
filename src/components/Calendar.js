import React,{ useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Calendar() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
           <h2>Calendar</h2> 
           <ReactCalendar 
           onChange={onChange}
           value={value}
           />
        </div>
    )
}
