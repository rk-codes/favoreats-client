import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./landing-page.css";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <section className="landing-section">
      <div className="intro-box">
        <p>
          Finding a good place to eat is hard enough. Keeping track of them,
          even harder. Fret no more!
        </p>
        <p>
          Share your dining experience with us and we'll track your hits and
          misses for you.
        </p>
      </div>
      <div className="about-outer">
        <div className="about-inner">
          <div>
            <i className="fa fa-cutlery" aria-hidden="true" />
            <h4>Add restaurants</h4>
            <p>Add restaurants that you've visited or are planning to.</p>
          </div>
          <div>
            <i className="fa fa-comments-o" aria-hidden="true" />
            <h4>Review dishes</h4>
            <p>Add your past orders. And don't forget to review them!</p>
          </div>
          <div>
            <i className="fa fa-check" aria-hidden="true" />
            <h4>Track your favorites</h4>
            <p>
              Track the dishes that you love and that you don't.<br />
              Anytime. Anywhere.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-box">
          <p>
            <i className="fa fa-copyright" aria-hidden="true" />Resmi Krishna
          </p>
        </div>
      </footer>
    </section>
  );
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
