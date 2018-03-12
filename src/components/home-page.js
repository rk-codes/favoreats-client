import React from 'react';

import Header from './header';
import RestaurantsList from './restaurants-list';

export default function HomePage() {
    return(
        <div>
            <h1>Home Page</h1>
            <RestaurantsList />          
        </div>
    )
}