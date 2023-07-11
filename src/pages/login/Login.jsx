import './login.scss'

const Login = () => {

  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://www.lifewire.com/thmb/tspyUBw4tcHRcwfQfdG-ZoHhTvA=/2000x540/filters:no_upscale():max_bytes(150000):strip_icc()/Netflix_2014_logo.svg-57f7c9ca5f9b586c355f5904.png" alt="" />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or phone number'/>
                <input type="password" placeholder='Password' />
                <button className="loginButton">Sign In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>This page is protected by google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.</small>
            </form>
        </div>
    </div>
  )
}

export default Login