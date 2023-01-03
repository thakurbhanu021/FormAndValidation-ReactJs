import React, { useState } from "react";

import { validEmail, validPassword } from "./regex.js";
// import classes from './Form.module.css'

const Form = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    mobile: "",
    address: "",
  });
  const [isDirty, setIsDirty] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    dob: false,
    gender: false,
    mobile: false,
    address: false,
  });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  const changeHandler = (field, e) => {
    const { value } = e.target;
    const newFormData = { ...formData };
    const newIsDirty = { ...isDirty };
    newFormData[field] = value;
    newIsDirty[field] = true;
    setformData(newFormData);
    validateFormData(newFormData, newIsDirty);
  };

  const validateFormData = (data, newIsDirty) => {
    const newErrors = { ...errors };
    // console.log(data, newIsDirty);
    Object.keys(newIsDirty).forEach((field) => {
      if (field === "firstName" && newIsDirty[field]) {
        if (!data[field].trim().length) {
          newErrors[field] = "First Name can't be empty";
        } else if (data[field].length <= 3) {
          newErrors[field] = "First Name must be greater than 3 characters";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
        }
      } else if (field === "lastName" && newIsDirty[field]) {
        if (!data[field].trim().length) {
          newErrors[field] = "Last Name can't be empty";
        } else if (data[field].length <= 3) {
          newErrors[field] = "Last Name must be greater than 3 characters";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
        }
      } else if (field === "email" && newIsDirty[field]) {
        if (!validEmail.test(data[field])) {
          newErrors[field] = "Entered Email is Invalid";
        } else if (!data[field].trim().length) {
          newErrors[field] = "Email can't be empty.";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
        }
      } else if (field === "password" && newIsDirty[field]) {
        if (!validPassword.test(data[field])) {
          newErrors[field] = "Entered Password is weak";
        } else if (!data[field].trim().length) {
          newErrors[field] = "Password can't be empty. Please Set Password!!";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
        }
      } else if (field === "dob" && newIsDirty[field]) {
        if (!data[field].trim().length) {
          newErrors[field] = "Please Select your date of birth correctly";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
        }
      } else if (field === "mobile" && newIsDirty[field]) {
        if (!data[field].trim().length) {
          newErrors[field] = "Mobile Number can't be empty";
        } else if (isNaN(data[field])) {
          newErrors[field] = "Please enter numeric digits";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
        }
      } else if (field === "address" && newIsDirty[field]) {
        if (!data[field].trim().length) {
          newErrors[field] = "Please Enter your full address";
        } else {
          delete newErrors[field];
          newIsDirty[field] = false;
          setDisabled(true);
        }
      }
    });
    setIsDirty(newIsDirty);
    setErrors(newErrors);
    return Object.keys(newErrors) ? newErrors : null;
  };

  // const genderHandler = (field, value) => {
  //     const newGenderFormData = {...formData};
  //     newGenderFormData[field] = value;
  //     setformData(newGenderFormData);
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    alert(
      "your form data is ready to use now! You can view it in your console"
    );
    console.log(formData);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setformData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      mobile: "",
      address: "",
    });
    setIsDirty({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      dob: false,
      gender: false,
      mobile: false,
      address: false,
    });
    setDisabled(false);
    alert("Form Resetted!!");
  };

  return (
    <form className="py-3 px-5">
      <h3 className="mb-4">Registration Form</h3>
      <div className="form-group row">
        <label htmlFor="firstName" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className={isDirty.firstName ? 'form-control is-invalid' : 'form-control'}
            id="firstName"
            value={formData.firstName}
            onChange={(e) => changeHandler("firstName", e)}
            placeholder="Ex- Rohit"
          />
          {isDirty.firstName && errors.firstName && (
            <div className="feedback text-danger">{errors.firstName}</div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="lastName" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className={isDirty.lastName ? 'form-control is-invalid' : 'form-control'}
            id="lastName"
            value={formData.lastName}
            onChange={(e) => changeHandler("lastName", e)}
            placeholder="Ex- Sharma"
          />
          {isDirty.lastName && errors.lastName && (
            <div className="feedback text-danger">{errors.lastName}</div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className={isDirty.email ? 'form-control is-invalid' : 'form-control'}
            id="staticEmail"
            value={formData.email}
            onChange={(e) => changeHandler("email", e)}
            placeholder="Ex- abc@yxz.com"
          />
          {isDirty.email && errors.email && (
            <div className="feedback text-danger">{errors.email}</div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className={isDirty.password ? 'form-control is-invalid' : 'form-control'}
            id="inputPassword"
            value={formData.password}
            onChange={(e) => changeHandler("password", e)}
            placeholder="Must use abc, ABC, numeric or special characters"
          />
          {isDirty.password && errors.password && (
            <div className="feedback text-danger">{errors.password}</div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputDate" className="col-sm-2 col-form-label">
          Date of Birth
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            className={isDirty.dob ? 'form-control is-invalid' : 'form-control'}
            id="inputDate"
            value={formData.dob}
            onChange={(e) => changeHandler("dob", e)}
          />
          {isDirty.dob && errors.dob && (
            <div className="feedback text-danger">{errors.dob}</div>
          )}
        </div>
      </div>
      <fieldset className="form-group row">
        <legend className="col-form-label col-sm-2 float-sm-left pt-0">
          Gender
        </legend>
        <div className="col-sm-10 d-flex">
          <div className="mx-4">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value={formData.gender}
            />
            <label className="form-check-label" htmlFor="gridRadios1">
              Male
            </label>
          </div>
          <div className="mx-4">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value={formData.gender}
            />
            <label className="form-check-label" htmlFor="gridRadios2">
              Female
            </label>
          </div>
          <div className="mx-4">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value={formData.gender}
            />
            <label className="form-check-label" htmlFor="gridRadios3">
              Others
            </label>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <label htmlFor="mobile" className="col-sm-2 col-form-label">
          Mobile Number
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className={isDirty.mobile ? 'form-control is-invalid' : 'form-control'}
            id="mobile"
            value={formData.mobile}
            onChange={(e) => changeHandler("mobile", e)}
            maxLength="10"
            placeholder="Enter your 10 digits mobile number"
          />
          {isDirty.mobile && errors.mobile && (
            <div className="feedback text-danger">{errors.mobile}</div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="address" className="col-sm-2 col-form-label">
          Address
        </label>
        <div className="col-sm-10">
          <textarea
            type="text"
            className={isDirty.address ? 'form-control is-invalid' : 'form-control'}
            id="address"
            rows="5"
            value={formData.address}
            onChange={(e) => changeHandler("address", e)}
            placeholder="Enter your full address"
          />
          {isDirty.address && errors.address && (
            <div className="feedback text-danger">{errors.address}</div>
          )}
        </div>
      </div>
      <div className="form-group row pt-3">
        <div className="col-sm-2"></div>
        <div className="col-sm-10 d-flex justify-content-start">
          <button
            className="btn btn-primary mr-4"
            type="submit"
            onClick={submitHandler}
            disabled={!disabled}
          >
            Submit form
          </button>
          <button
            className="btn btn-primary"
            type="reset"
            onClick={resetHandler}
          >
            Reset form
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
