import classes from './Form.module.css'

const Form = () => {
    return <form className='py-3 px-5'>
    <h3 className='mb-4'>Registration Form</h3>
    <div className="form-group row">
    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="firstName" />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="lastName" />
    </div>
  </div>
    <div className="form-group row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="staticEmail" />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date of Birth</label>
    <div className="col-sm-10">
      <input type="date" className="form-control" id="inputDate" />
    </div>
  </div>
  <fieldset className="form-group row">
    <legend className="col-form-label col-sm-2 float-sm-left pt-0">Gender</legend>
    <div className="col-sm-10 d-flex">
      <div className="mx-4">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
        <label className="form-check-label" htmlFor="gridRadios1">
          Male
        </label>
      </div>
      <div className="mx-4">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="gridRadios2">
          Female
        </label>
      </div>
      <div className="mx-4">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="gridRadios2">
          Others
        </label>
      </div>
      </div>
  </fieldset>
  <div className="form-group row">
    <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile Number</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="mobile" />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
    <div className="col-sm-10">
      <textarea type="text" className="form-control" id="address" rows='5' />
    </div>
  </div>
  <div className="form-group row pt-3">
    <div className='col-sm-2'>
    </div>
    <div className="col-sm-10 d-flex justify-content-start">
    <button class="btn btn-primary mr-4" type="submit">Submit form</button>
    <button class="btn btn-primary" type="submit">Reset form</button>
    </div>
  </div>
  </form>

};

export default Form;