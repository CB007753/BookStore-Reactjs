import React from 'react'

const SignUp = () => {
    return (
        <>
          <section className='showcase login'>
            <div className='showcase-overlay'>
              <form className='form-control'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter Username'
                  required
                />
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Email Address'
                  required
                />
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter password'
                />
                <input
                  type='password'
                  name='password2'
                  id='password2'
                  placeholder='Confirm your password'
                />
                <button type='submit'>Sign Up</button>
              </form>
            </div>
          </section>
        </>
      )
}

export default SignUp
