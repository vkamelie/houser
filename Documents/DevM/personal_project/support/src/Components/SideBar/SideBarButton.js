import React from 'react';
import "./Toggle.css"

const toggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className='toggle-Line'/>
        <div className='toggle-Line'/>
        <div className='toggle-Line'/>
    </button>
);

export default toggleButton;