import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import validationSchema from "../components/validations/Validation_Search";
export default function BasvuruSorgula() {
  const navigate = useNavigate();
  const { getApplication } = useContext(UserContext);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        applicationNumber: "",
      },
      onSubmit: (values) => {
        // const inputValue = document.getElementById("search").value;

        getApplication(values.applicationNumber).then((user) => {
          user.length === 0
            ? navigate("/basvuru/404")
            : Number(user[0].applicationNumber) ===
                Number(values.applicationNumber) &&
              navigate(`/basvuru/${user[0].applicationNumber}`);
        });
      },
      validationSchema,
    });

  return (
    <section className="page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Application Inquiry</h2>
        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="applicationNumber">Application Number</label>
            <input
              id="search"
              onChange={handleChange}
              className="signup-form_field"
              name="applicationNumber"
              value={values.applicationNumber}
              onBlur={handleBlur}
            />
            {errors.applicationNumber && touched.applicationNumber && (
              <div className="error">{errors.applicationNumber}</div>
            )}
          </div>
        </div>
        <div className="signup-form_group">
          <button className="button" name="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
