import React from 'react';


export default function AddDishForm(){
    return(
        <form>
            <fieldset>
                <legend>Add dish form</legend>
                <label htmlFor="name">Dish Name</label>
                <input type="text" />
                <label htmlFor="name">Rating</label>
                <input type="text" />
                <label htmlFor="name">Review</label>
                <input type="text" />
                <button>Cancel</button>
                <button type="submit">Add</button>
            </fieldset>     
        </form>
    )
}