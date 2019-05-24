import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="Person">
        <p on onClick={props.click}>{props.name} plays for the club {props.club}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.change} value={props.name}/>
    </div>
    );
}

export default person;