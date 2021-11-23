import React from 'react';
import { useState, useEffect } from 'react';

const Login = () => {

  //creating a state to hold the user entered value
  const initialValues = { email: "", password: ""};
  const [formValues, setFormvalues]= useState(initialValues);
  //creating a state to hold errors
  const [formErrors, setFormErrors] = useState({});
  //flag for submit
  const [isSubmit, setIsSubmit]= useState(false);

  //function to handle the change when user types something
  const handleChange = (e) => {

    const {name, value}= e.target;
    setFormvalues({...formValues, [name]:value});
    
  };
//function to handle the submit button of form
  const handleSubmit = (e) => {

    e.preventDefault();
    setFormErrors(validate(formValues));
    
    setIsSubmit(true);
  };

//**********
  useEffect(() => {

    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }

  }, [formErrors]);

  //function to do the validations
  const validate = (values) => {

    const errors={};
    //email validation key got from url:https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!values.email) {
      errors.email = "*Email is required*";
    }
    else if(!regex.test(values.email)){
      errors.email= "*This is not a valid email format!*";
    }
    if(!values.password) {
      errors.password = "*Password is required*";
    }
    else if(values.password.length < 4){
      errors.password= "*Password must be more than 4 characters*";
    }
    else if(values.password.length > 10){
      errors.password= "*Password must not be more than 10 characters*";
    }

    return errors;
  };
//--------------------------------------------------------------------------------

    return (
        <>
          <section className='showcase login'>
            <div className='showcase-overlay'>
              
              {Object.keys(formErrors).length === 0 && isSubmit ?(<div className="ui message success">Signed in Successfully</div>
              ): (
              <div className="ui message failure">Welcome To the World of Knowledge</div>
              )}
           
              
              <form className='form-control' onSubmit={handleSubmit}>
                <input
                  type='email' name='email' id='email' placeholder='Enter Email'  value={formValues.email} onChange={handleChange} required/>
                  <p>{formErrors.email}</p>

                <input type='password' name='password' id='password' placeholder='Enter Password'  value={formValues.password} onChange={handleChange} required/>
                <p>{formErrors.password}</p>

                <button type='submit'>Log In</button>
              </form>
            </div>
          </section>
        </>
      )
}

export default Login
