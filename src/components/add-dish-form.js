import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { addDish } from '../actions';

export class AddDishForm extends React.Component{

    onSubmit(values, dispatch){     
        console.log("Dish Form submitted");
        console.log(values);
        //API call to POST new restaurant
        dispatch(addDish(values));
    }

    render() {
        return(
            <form className="add-dish-form" onSubmit={this.props.handleSubmit((values, dispatch) => this.onSubmit(values, dispatch))}>
                <fieldset>
                    <legend>Add dish form</legend>
                    <label htmlFor="name">Dish Name</label>
                    <Field name="name" type="text" component="input" />
                    <label htmlFor="name">Rating</label>
                    <Field name="name" type="text" component="input" />
                    <label htmlFor="name">Review</label>
                    <Field name="name" type="text" component="input" />
                    <button>Cancel</button>
                    <button type="submit">Add</button>
                </fieldset>     
            </form>
        )
    }    
}
export default reduxForm({
    form: 'adddish'
})(AddDishForm);