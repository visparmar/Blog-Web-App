import React,{useState}from 'react';
import { TextField, Button, } from '@mui/material';
import './Login.css'



const Login = () => {

const [account,setaccount]=useState('login');
    return (
        <>
             

            <div className='container'>
{
            account==='login'?
                <div className="inner-container">

                    <div className="login-image">
                        <img src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="this is logo" />
                    </div>
                    <div className="info-input">


                        <TextField variant="standard" className='txtfield' label='Enter Username' />
                        <TextField variant="standard" className='txtfield' label='Enter Password' />
                    </div>
                    <div className="button-login">
                        <Button variant="contained">Login</Button>
                        <span>OR</span>
                        <Button className='create' onClick={()=>setaccount('create')}>Create an Account</Button>
                    </div>


                </div>
 :
                <div className="inner-container">

                    <div className="login-image">
                        <img src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="this is logo" />
                    </div>
                    <div className="info-input">

                    <TextField variant="standard" className='txtfield' label='Enter Name' />
                        <TextField variant="standard" className='txtfield' label='Enter Username' />
                        <TextField variant="standard" className='txtfield' label='Enter Password' />
                    </div>
                    <div className="button-login">
                        <Button variant="contained">Sign Up</Button>
                        <span>OR</span>
                        <Button className='create' onClick={()=>setaccount('login')}>Already have an Account</Button>
                    </div>


                </div>
}

            </div>

        </>
    );
}



export default Login;