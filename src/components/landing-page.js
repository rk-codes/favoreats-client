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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="about-outer">
        <div className="about-inner">
          <div>
            <i className="fa fa-cutlery" aria-hidden="true" />
            <h4>Add restaurants</h4>
            <p>Add restaurants that you've visited or are planning to</p>
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
