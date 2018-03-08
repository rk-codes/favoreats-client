import React from 'react';

import DishInfo from './dish-info';

export default function DishesList() {
    const data = [{
        name: 'Xyz',
        rating: '3'
    },
    {
        name: 'Bcd',
        rating: '5'
    }
    ]

    const info = data.map((item, index) =>
        <li key={index}>
            <DishInfo {...item} />
        </li>
    )
    return(
        <div className="dishes-list">
            <h3>Restaurant Name</h3>
            <p>Cuisine</p>
            <span>Dishes count</span>
            <ul>
                {info}
            </ul>
            <button>Add dish</button>
        </div>
    )
}