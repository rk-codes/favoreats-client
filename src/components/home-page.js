import React from 'react';

import Header from './header';
import RestaurantsList from './restaurants-list';

export default function HomePage() {
    return(
        <div>
            <Header />
            <h1>Home Page</h1>
            <RestaurantsList />
            <button>Add Restaurant</button>
        </div>
    )
}