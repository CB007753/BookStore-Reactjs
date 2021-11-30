import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (

        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h1>Oops!! Looks like the page you were looking for does not exist</h1>

          <Link to="../">Go Back</Link>
        </div>
      )
}

export default Error
