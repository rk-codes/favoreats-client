import React from 'react';
import {Link} from 'react-router-dom';


export default class RestaurantInfo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    onDelete(){
        console.log("Delete Clicked");
    }
    onEdit() {
        console.log("Edit Clicked");
    }
    render() {
        return(
            <div className="restaurant-info">
                <Link to= {`/restaurants/${this.props.id}/dishes`}>Restaurant Name: {this.props.name}</Link>
                <p>Location: {this.props.location}</p>
                <span>Cuisine: {this.props.cuisine}</span>
                <p>Dishes Count: {this.props.dishCount}</p>
                <button onClick={() => this.onEdit()}>Edit</button>
                <button onClick={() => this.onDelete()}>Delete</button>
            </div>
        )
    }
   
}

//Delete clicked -> dispatch action to delete the restaurant -> Redirect to the restaurants list page