import { reduxForm } from "redux-form";
import AddDishForm from "../components/add-dish-form";

export default reduxForm({
  form: "adddish"
})(AddDishForm);
