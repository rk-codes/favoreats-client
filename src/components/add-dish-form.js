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
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
        return(
            <form className="add-dish-form" onSubmit={this.props.handleSubmit((values, dispatch) => this.onSubmit(values, dispatch))}>
                {successMessage}
                {errorMessage}
                <fieldset>
                    <legend>Add dish form</legend>
                    <label htmlFor="name">Dish Name</label>
                    <Field name="name" type="text" component="input" />
                    <label htmlFor="rating">Rating</label>
                    <Field name="rating" type="text" component="input" />
                    <label htmlFor="review">Review</label>
                    <Field name="review" type="text" component="input" />
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