import React from 'react';

export default function Header(){
    return(
        <div className="header">
            <h1>FavorEats</h1>
            <nav>
                <ul>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}