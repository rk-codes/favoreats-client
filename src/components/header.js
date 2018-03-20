import React from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

export class Header extends React.Component{

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        let navLinks;

        if(this.props.loggedIn) {
            console.log("logged in");
            navLinks = (
                <ul>
                    <li><Link to = '/home'>Dashboard</Link></li>
                    <li><Link to = '/addrestaurant'>Add Restaurant</Link></li>
                    <li><a href="" onClick={() => this.logOut()}>Logout</a></li>
                </ul>
            )
        }
        else {
            navLinks = (
                <ul>
                    <li><Link to = "/signup">Sign Up</Link></li>
                    <li><Link to = "/login">Login</Link></li>
                    
                </ul>
            )
        }
        return(
            <div className="header">
                <h1>FavorEats</h1>
                <nav>
                    {navLinks}
                </nav>
            </div>
        )
    }
    
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
  
  export default connect(mapStateToProps)(Header);