import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import validationSchema from "../components/validations/Validation_SignUp";
import { randomNumber } from "../helpers/Helpers";

export default function BasvuruOlustur() {
  const { baseImage, addUser, uploadImage } = useContext(UserContext);

  const navigate = useNavigate();

  const d = new Date();
  let registerDate = d.toLocaleDateString();

  localStorage.setItem("applicationNumber", JSON.stringify("0"));

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        age: "",
        tc: "",
        reasonOfApp: "",
        applicationStatus: "",
        applicationNumber: "",
        applicationDate: "",
        address: "",
        attach: "",
      },
      onSubmit: (values) => {
        const newUser = {
          name: values.name,
          surname: values.surname,
          age: values.age,
          tc: values.tc,
          reasonOfApp: values.reasonOfApp,
          applicationStatus: "Bekliyor",
          applicationNumber: randomNumber(Math.pow(10, 5), Math.pow(10, 8)),
          applicationDate: registerDate,
          address: values.address,
          attach: baseImage,
        };
        addUser(newUser);
        baseImage !== "" && navigate("/basvuru-basarili");

        localStorage.setItem(
          "applicationNumber",
          JSON.stringify(newUser.applicationNumber)
        );
      },
      validationSchema,
    });

  useEffect(() => {});

  return (
    <div>
      <section className="page">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up 2</h2>
          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="name">Name:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="name"
                value={values.name}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div className="signup-form_group">
              <label htmlFor="surname">Surname:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="surname"
                value={values.surname}
                onBlur={handleBlur}
              />
              {errors.surname && touched.surname && (
                <div className="error">{errors.surname}</div>
              )}
            </div>
          </div>

          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="address">Address:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="address"
                value={values.address}
                onBlur={handleBlur}
              />
              {errors.address && touched.address && (
                <div className="error">{errors.address}</div>
              )}
            </div>
          </div>

          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="age">Age:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="age"
                value={values.age}
                onBlur={handleBlur}
              />
              {errors.age && touched.age && (
                <div className="error">{errors.age}</div>
              )}
            </div>
            <div className="signup-form_group">
              <label htmlFor="tc">TC:</label>
              <input
                onChange={handleChange}
                className="signup-form_field"
                name="tc"
                value={values.tc}
                onBlur={handleBlur}
              />
              {errors.tc && touched.tc && (
                <div className="error">{errors.tc}</div>
              )}
            </div>
          </div>

          <div className="signup-form_row">
            <div className="signup-form_group">
              <label htmlFor="reasonOfApp">Reason of Application:</label>
              <input
                className="signup-form_field"
                onChange={handleChange}
                name="reasonOfApp"
                placeholder="Job applications"
                value={values.reasonOfApp}
                onBlur={handleBlur}
              />
              {errors.reasonOfApp && touched.reasonOfApp && (
                <div className="error">{errors.reasonOfApp}</div>
              )}
            </div>

            <div className="signup-form_group">
              <label htmlFor="attach">File: </label>
              <input
                onChange={(e) => {
                  uploadImage(e);
                }}
                className="signup-form_field"
                id="attach"
                name="attach"
                type="file"
                onBlur={handleBlur}
              />
              {baseImage !== "" ? (
                <small className="attach-error"></small>
              ) : (
                <small className="attach-error">
                  Dosya boyutu 5MB altında olmalıdır
                </small>
              )}
            </div>
          </div>

          <div className="signup-form_group">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
