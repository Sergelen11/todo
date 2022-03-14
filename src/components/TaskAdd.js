import { useState, useEffect } from "react";
import { db } from "../firebase";
export const TaskAdd = ({editThis}) => {
    const [ title, setTitle ] = useState('');
    
    const onChange = (e) => {
        setTitle(e.target.value);
    }
    
    const onClick = () => {
        db.collection('todos').add({
            title: title,
            checked: false,
        })
        setTitle('')
    }
    return (
        <div className="container">
            <input type="text" onChange={ onChange } value={ title } /> 
            <button onClick={ onClick }>Add</button>
        </div>
    )
}