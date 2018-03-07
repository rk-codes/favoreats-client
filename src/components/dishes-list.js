import React from 'react';

import DishInfo from './dish-info';

export default function DishesList() {
    return(
        <div className="dishes-list">
            <h1>Dishes List</h1>
            <DishInfo />
        </div>
    )
}