import * as yup from "yup";

const validations = yup.object().shape({
  adminName: yup
    .string()
    .min(4, "Missing character, Are you admin or not?")
    .required("This field cannot be left blank."),
  password: yup
    .string()
    .min(4, "We do not trust you anymore")
    .required("This field cannot be left blank.")
});

export default validations;
