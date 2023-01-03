import React , { useState } from 'react';

// import classes from './Form.module.css'

const Form = () => {
    const [formData, setformData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        dob:'',
        gender:'',
        mobile:'',
        address:''
    })
    const [isDirty, setIsDirty] = useState({
        firstName:false,
        lastName:false,
        email:false,
        password:false,
        dob:false,
        gender:false,
        mobile:false,
        address:false
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (field, e) => {
        const {value} = e.target;
        const newFormData = {...formData};
        const newIsDirty = {...isDirty};
        newFormData[field] = value;
        newIsDirty[field] = true;
        setformData(newFormData);
        validateFormData(newFormData,newIsDirty);
    }

    const validateFormData = (data, newIsDirty) => {
        const newErrors = {...errors};
        console.log(data, newIsDirty);
        Object.keys(newIsDirty).forEach((field) => {
            if( field === 'firstName' && newIsDirty[field]){

            } else if (field === 'lastName' && newIsDirty[field]){

            } else if (field === 'email' && newIsDirty[field]){

            } else if (field === 'password' && newIsDirty[field]) {

            } else if (field === 'dob' && newIsDirty[field]) {

            } else if (field === 'mobile' && newIsDirty[field]) {

            } else if (field === 'address' && newIsDirty[field]) {
                
            }
        })
    }

    const submitHandler = () => {
        alert('your form data is ready to use now!')
    }

    const resetHandler = () => {
        setformData({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            dob:'',
            gender:'',
            mobile:'',
            address:''
        })
        alert('Form Resetted!!')
    }


    return <form className='py-3 px-5'>
    <h3 className='mb-4'>Registration Form</h3>
    <div className="form-group row">
    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={(e)=> changeHandler('firstName', e)}/> 
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={(e)=> changeHandler('lastName', e)}/>
    </div>
  </div>
    <div className="form-group row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="staticEmail" value={formData.email} onChange={(e)=> changeHandler('email', e)}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" value={formData.password} onChange={(e)=> changeHandler('password', e)}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date of Birth</label>
    <div className="col-sm-10">
      <input type="date" className="form-control" id="inputDate" value={formData.dob} onChange={(e)=> changeHandler('dob', e)}/>
    </div>
  </div>
  <fieldset className="form-group row">
    <legend className="col-form-label col-sm-2 float-sm-left pt-0">Gender</legend>
    <div className="col-sm-10 d-flex">
      <div className="mx-4">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={formData.gender}/>
        <label className="form-check-label" htmlFor="gridRadios1">
          Male
        </label>
      </div>
      <div className="mx-4">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={formData.gender} />
        <label className="form-check-label" htmlFor="gridRadios2">
          Female
        </label>
      </div>
      <div className="mx-4">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={formData.gender}/>
        <label className="form-check-label" htmlFor="gridRadios3">
          Others
        </label>
      </div>
      </div>
  </fieldset>
  <div className="form-group row">
    <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile Number</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="mobile" value={formData.mobile} onChange={(e)=> changeHandler('mobile', e)}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
    <div className="col-sm-10">
      <textarea type="text" className="form-control" id="address" rows='5' value={formData.address} onChange={(e)=> changeHandler('address', e)}/>
    </div>
  </div>
  <div className="form-group row pt-3">
    <div className='col-sm-2'>
    </div>
    <div className="col-sm-10 d-flex justify-content-start">
    <button className="btn btn-primary mr-4" type="submit" onClick={submitHandler}>Submit form</button>
    <button className="btn btn-primary" type="reset" onClick={resetHandler}>Reset form</button>
    </div>
  </div>
  </form>

};

export default Form;