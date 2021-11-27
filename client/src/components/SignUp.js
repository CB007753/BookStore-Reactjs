import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios' ;

const SignUp = () => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  //will be called whenever user press sign up button
  const submitRegistration = () => {
      Axios.post('http://localhost:3001/api/insert', {
        Fullname: fullname, 
        Email: email, 
        Password: password, 
        Phone: phone
      }).then(()=>{
        alert("Successfully Registered")
      });
  };

//   //creating a state to hold the user entered value
//   const initialValues = { fullname: "", email: "", password: "", mobile: ""};
//   const [formValues, setFormvalues]= useState(initialValues);
// //creating a state to hold errors
// const [formErrors, setFormErrors] = useState({});
// //flag for submit
// const [isSubmit, setIsSubmit]= useState(false); 

// //function to handle the change when user types something
// const handleChange = (e) => {

//   const {name, value}= e.target;
//   setFormvalues({...formValues, [name]:value});
  
// };

// //function to handle the submit button of form
// const handleSubmit = (e) => {

//   e.preventDefault();
//   setFormErrors(validate(formValues));
  
//   setIsSubmit(true);
// };

// //**********
// useEffect(() => {

//   console.log(formErrors);
//   if(Object.keys(formErrors).length === 0 && isSubmit){
//     console.log(formValues);
//   }

// }, [formErrors]);

// //function to do the validations
// const validate = (values) => {

//   const errors={};
//   //email pattern regex got from url:https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
//   const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   //srilankan mobile pattern regex got from https://aye.sh/blog/sri-lankan-phone-number-regex
//   const regex2 =/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;  
   
//   if(!values.fullname) {
//     errors.fullname = "*Full name is required*";
//   }
//   else if(values.fullname.length < 3){
//     errors.fullname = "*Your name must have atleast 3 or more characters*"
//   }

//   if(!values.email) {
//     errors.email = "*Email is required*";
//   }
//   else if(!regex.test(values.email)){
//     errors.email= "*This is not a valid email format!*";
//   }

//   if(!values.password) {
//     errors.password = "*Password is required*";
//   }
//   else if(values.password.length < 4){
//     errors.password= "*Password must be more than 4 characters*";
//   }
//   else if(values.password.length > 10){
//     errors.password= "*Password must not be more than 10 characters*";
//   }

//   if (!values.mobile){
//     errors.mobile= "Phone Number is required";
//   }
//   else if(!regex2.test(values.mobile)){
//     errors.mobile= "*This is not a valid Sri Lankan phone number!*";
//   }

  

//   return errors;
// }

/* should put after --> <div className='showcase-overlay'>

{ {Object.keys(formErrors).length === 0 && isSubmit ?(<div className="ui message success">Signed in Successfully</div>
              ): (
              <div className="ui message failure">Welcome To the World of Knowledge</div>
              )} }*/


    return (
        <>
          <section className='showcase login'>
            <div className='showcase-overlay'>

           

              <form className='form-control' /*onSubmit={handleSubmit}*/>
                <input
                  type='text'
                  name='fullname'
                  id='fullname'
                  placeholder='Enter Full Name'
                 // defaultValue={formValues.fullname} 
                  onChange={/*handleChange,*/(e) =>{
                      setFullname(e.target.value)
                  } }
                  required
                />
                {/* <p>{formErrors.fullname}</p> */}

                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Email Address'
                  //defaultValue={formValues.email} 
                  onChange={/*handleChange,*/(e) =>{
                    setEmail(e.target.value)
                } }
                  required
                />
                {/* <p>{formErrors.email}</p> */}

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter password'
                  //defaultValue={formValues.password} 
                  onChange={/*handleChange,*/(e) =>{
                    setPassword(e.target.value)
                } }
                  required
                />
                {/* <p>{formErrors.password}</p> */}

                <input
                  type='text'
                  name='mobile'
                  id='mobile'
                  placeholder='Enter Phone Number'
                  //defaultValue={formValues.mobile} 
                  onChange={/*handleChange,*/(e) =>{
                    setPhone(e.target.value)
                } }
                  required
                />
                {/* <p>{formErrors.mobile}</p> */}

                <button type='submit' onClick={submitRegistration}>Sign Up</button>
              </form>
            </div>
          </section>
        </>
      )
}

export default SignUp
