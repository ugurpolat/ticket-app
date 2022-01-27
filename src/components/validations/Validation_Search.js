import * as yup from "yup";

const validations = yup.object().shape({
  applicationNumber: yup
    .number()
    .min(6, "The Application Number contains between 6 and 9 digits.")
    .required("This field cannot be left blank.")
});

export default validations;
