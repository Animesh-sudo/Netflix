import { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://www.lifewire.com/thmb/tspyUBw4tcHRcwfQfdG-ZoHhTvA=/2000x540/filters:no_upscale():max_bytes(150000):strip_icc()/Netflix_2014_logo.svg-57f7c9ca5f9b586c355f5904.png" alt="" />
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder='email address' ref={emailRef} />
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ) : (
                <form className="input">
                    <input type="password" placeholder='password' ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
            )}
            
        </div>
    </div>
  )
}

export default Register