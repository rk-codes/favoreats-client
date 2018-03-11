import React from 'react';
import { connect } from 'react-redux';

import DishInfo from './dish-info';
import { fetchAllDishes } from '../actions';

class DishesList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
    // }

    componentDidMount() {
        console.log("mount");
        this.props.fetchAllDishes();
    }

    onClick(){
        console.log("Clicked");
        //render add dish form
    
    }

    render() {
        console.log(this.props.restaurants);
        // const info = this.props.restaurants.dishes.map((item, index) =>
        // <li key={index}>
        //     <DishInfo {...item} />
        // </li>
        // )
        return(
            <div className="dishes-list">
                <h3>Restaurant Name</h3>
                <p>Cuisine</p>
                <span>Dishes count</span>
                <ul>
                    
                </ul>
                <button onClick = {() => this.onClick()}>Add dish</button>
            </div>
        )
    }
   
}
const mapStateToProps = (state) => {
    //console.log(state.restaurant.restaurants);
    return{
        restaurants: state.restaurant.restaurants
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllDishes: () => dispatch(fetchAllDishes())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(DishesList);


//Add dish clicked -> render add dish form -> rerender dishes list with the updated data 