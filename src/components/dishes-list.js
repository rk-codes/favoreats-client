import React from 'react';
import { connect } from 'react-redux';

import DishInfo from './dish-info';

class DishesList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            dishes: [{
                dishId: '1',
                name: 'Xyz',
                rating: '3'
            },
            {
                dishId: '2',
                name: 'Bcd',
                rating: '5'
            }]
        }
    }

    onClick(){
        console.log("Clicked");
        //render add dish form
    
    }

    render() {
        const info = this.state.dishes.map((item, index) =>
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
                <button onClick = {() => this.onClick()}>Add dish</button>
            </div>
        )
    }
   
}
const mapStateToProps = (state) => {
    return{
        dishes: state.dishes
    }
}

export default connect(mapStateToProps)(DishesList);


//Add dish clicked -> render add dish form -> rerender dishes list with the updated data 