import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Input from "./Input";
import './Login.css'
function Login(){

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[disabled, setDisabled] = useState(true);
    const[isEmailValid, setIsEmailValid] = useState(true);
    const[isPassValid, setIsPassValid] = useState(true);

    const history = useHistory();

    const handleEmailChange = (value) =>{
        
        if(value.length > 0)
        {
            setIsEmailValid( value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) )
        }
        setEmail(value);
    }

    const handlePasswordChange = (value) =>{
        
        if(value.length > 0)
        {
            setIsPassValid( value.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$.%^&*])[a-zA-Z0-9!@#$%.^&*]{8,16}$/) )
        }
        setPassword(value);  
    }

    useEffect(() => {
        setDisabled( !(email=='mridul@gmail.com' && password=='Mridul123.') );
    }, [email, password])

    const handleSubmit = ()=>{
        history.push('/dashboard')
    }

    return <>
        <h1>LOGIN</h1>
        <hr/>
        
        <div className='input-box' >
        <Input label='Email' type='email' value={email} handleChange={handleEmailChange}/>
        {
            !isEmailValid && <h5 style={{color:'red',margin:'3px'}} >Email is invalid</h5>
        }
        <Input label='Password' type='password' value={password} handleChange = {handlePasswordChange} />
        {
            !isPassValid && <h5 style={{color:'red',margin:'3px'}} >Pass is invalid</h5>
        }
        <button style={{marginTop:'10px'}} disabled={disabled} onClick={ handleSubmit } >Login</button>
            
        </div>

    </>

}

export default Login;