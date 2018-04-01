import { reduxForm } from "redux-form";
import AddRestaurantForm from "../components/add-restaurant-form";

export default reduxForm({
  form: "addrestaurant"
})(AddRestaurantForm);
