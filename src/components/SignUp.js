import React from 'react'
import { useState, useEffect } from 'react';

const SignUp = () => {

  //creating a state to hold the user entered value
  const initialValues = { username: "", email: "", password: "", mobile: ""};
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
  //email pattern regex got from url:https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //srilankan mobile pattern regex got from https://aye.sh/blog/sri-lankan-phone-number-regex
  const regex2 =/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;  
   
  if(!values.username) {
    errors.username = "*Username is required*";
  }

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

  if (!values.mobile){
    errors.mobile= "Phone Number is required";
  }
  else if(!regex2.test(values.mobile)){
    errors.mobile= "*This is not a valid Sri Lankan phone number!*";
  }

  

  return errors;
}



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
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter Username'
                  value={formValues.username} 
                  onChange={handleChange}
                  required
                />
                <p>{formErrors.username}</p>

                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Email Address'
                  value={formValues.email} 
                  onChange={handleChange}
                  required
                />
                <p>{formErrors.email}</p>

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter password'
                  value={formValues.password} 
                  onChange={handleChange}
                  required
                />
                <p>{formErrors.password}</p>

                <input
                  type='text'
                  name='mobile'
                  id='mobile'
                  placeholder='Enter Phone Number'
                  value={formValues.mobile} 
                  onChange={handleChange}
                  required
                />
                <p>{formErrors.mobile}</p>

                <button type='submit'>Sign Up</button>
              </form>
            </div>
          </section>
        </>
      )
}

export default SignUp
