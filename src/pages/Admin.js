import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import validationSchema from "../components/validations/Validation_Admin";

export default function Admin() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      adminName: "",
      password: ""
    },
    onSubmit: (values) => {
      if (values.adminName === "kodluyoruz") {
        if (values.password === "bootcamp109") {
          navigate("/admin/basvuru-listesi");
        }
      }
    },
    validationSchema
  });

  return (
    <section className="page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Admin Panel</h2>
        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="adminName">Name:</label>
            <input
              id="adminName"
              name="adminName"
              placeholder="..."
              onChange={handleChange}
              className="signup-form_field"
              onBlur={handleBlur}
            />
            {errors.adminName && touched.adminName && (
              <div className="error">{errors.adminName}</div>
            )}
          </div>
        </div>
        <div className="signup-form_row">
          <div className="signup-form_group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="..."
              onChange={handleChange}
              className="signup-form_field"
            />
            {errors.password && touched.password && <div className="error">{errors.password}</div>}
          </div>
        </div>
        <div className="signup-form_group">
          <button className="button" type="submit">
            Log In
          </button>
        </div>
      </form>
    </section>
  );
}
