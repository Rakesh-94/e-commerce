import React,{useState} from 'react'
// import {useNavigate} from "react-router-dom"
import "./Login.css"

import {useNavigate } from 'react-router-dom';



const Login = () => {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const correctName = 'Rakesh pal';
    const correctEmail = 'rakesh@gmail.com';
    const correctPassword = 'password123';


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name === correctName && email === correctEmail && password === correctPassword) {
          setIsLoggedIn(true)
          setLoginError(false);
        } else {
          setIsLoggedIn(false);
          setLoginError(true);
        }
      };


  return (
    
        <div className='login'>
            <form className='login_form' onSubmit={handleSubmit}>
                <h1 className='login_heading'>Login now</h1>
                <input className='login_input' type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input className='login_input' type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='login_input' type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className='login_button' type="submit">Login</button>
                
            </form>
            {isLoggedIn  && history("/Home")}
            {loginError && <p>Error: Incorrect credentials.</p>}
        </div>
        

  )
}

export default Login;