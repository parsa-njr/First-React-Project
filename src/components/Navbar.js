import React from 'react';
import reactlogo from './react-icon.png'
// import  ReactDOM  from 'react-dom';


export default function Navbar() {
    return (
        <nav>
            
            <img src={reactlogo}  alt=""  className='nav--icon'/>
            <h3 className='nav--logo-text'>React Fact</h3>

            <h4 className='nav--title'>Parsa Nejatpoor</h4>
        </nav>
    )
}
