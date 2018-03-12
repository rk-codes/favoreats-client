import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { addRestaurant } from '../actions';

export class AddRestaurantForm extends React.Component{

    onSubmit(values, dispatch){     
        console.log("Form submitted");
        console.log(values);
        //API call to POST new restaurant
        dispatch(addRestaurant(values));
        this.props.history.push('/home');
        
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
            <form className="add-restaurant-form" onSubmit={this.props.handleSubmit((values, dispatch) => this.onSubmit(values, dispatch))}>
                {successMessage}
                {errorMessage}
                <fieldset>
                    <legend>Add restaurant form</legend>
                    <label htmlFor="name">Restaurant Name</label>
                    <Field name="name" type="text" component="input" />
                    <label htmlFor="location">City/State</label>
                    <Field name="location" type="text" component="input" />
                    <label htmlFor="cuisine">Cuisine</label>
                    <Field name="cuisine" type="text" component="input" />
                    <button>Cancel</button>
                    <button type="submit">Add</button>
                </fieldset>     
            </form>
        )
    }
    
}
export default reduxForm({
    form: 'addrestaurant'
})(AddRestaurantForm);


//Submit the form -> dispatch an action to add the restaurant data -> Redirect to the restaurants list page