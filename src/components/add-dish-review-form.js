import React from 'react';


export default function AddDishReview(){
    return(
        <div>
            <h3>Dish name</h3>
            <form>
                <fieldset>
                    <legend>Add review form</legend>
                    <label htmlFor="name">Rating</label>
                    <input type="text" />
                    <label htmlFor="name">Review</label>
                    <input type="text" />
                    <button>Cancel</button>
                    <button type="submit">Post</button>
                </fieldset>     
            </form>
        </div>
        
    )
}