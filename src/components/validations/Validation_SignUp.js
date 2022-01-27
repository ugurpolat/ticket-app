import * as yup from "yup";

const validations = yup.object().shape({
  name: yup
    .string()
    .min(2, "The name must contain at least two characters.")
    .required("This field cannot be left blank."),

  surname: yup
    .string()
    .min(2, "The name must contain at least two characters.")
    .required("This field cannot be left blank."),

  address: yup
    .string()
    .min(15, "The address must contain at least 15 characters.")
    .required("This field cannot be left blank."),

  age: yup
    .number()
    .min(2, "the age number consists of between 1-99.")
    .required("This field cannot be left blank."),

  tc: yup
    .number()
    .min(11, "TC number consists of 11 digits.")
    .required("This field cannot be left blank."),

  reasonOfApp: yup.string().required("This field cannot be left blank.")
});

export default validations;
