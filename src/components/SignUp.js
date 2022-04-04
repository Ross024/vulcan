import React from 'react'

function SignUp() {
  return (
    <div className="news-letter-signup">
        <h3>Stay in the know. Sign up for our newsletter.</h3>
        <form className="signup-form" action="submit">
            {/* <label htmlFor="signup">Stay in the know. Sign up for our newsletter.</label> */}
            <input type="text" placeholder='Enter your email'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp