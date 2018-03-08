import React from 'react';


export default function AddRestaurantForm(){
    return(
        <form className="add-restaurant-form">
            <fieldset>
                <legend>Add restaurant form</legend>
                <label htmlFor="name">Restaurant Name</label>
                <input type="text" />
                <label htmlFor="name">City/State</label>
                <input type="text" />
                <label htmlFor="name">Cuisine</label>
                <input type="text" />
                <button>Cancel</button>
                <button type="submit">Add</button>
            </fieldset>     
        </form>
    )
}