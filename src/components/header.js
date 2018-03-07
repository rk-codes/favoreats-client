import React from 'react';
import ReactDOM from 'react-dom';

export default function Header(){
    return(
        <div className="header">
            <h1>FavorEats</h1>
            <nav>
                <ul>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}