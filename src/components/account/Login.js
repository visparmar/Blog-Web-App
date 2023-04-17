import React,{useState}from 'react';
import { TextField, Button, } from '@mui/material';
import {API} from '../service/api'
import './Login.css'


const signupInitialValues={
    name:'',
    username:'',
    password:''

}
const Login = () => {

const [account,setaccount]=useState('login');
const [signup,setsignup]=useState(signupInitialValues)
const [error,seterror]=useState('')

const onInputChange=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value});
}

const signupUser= async()=>{
let response=await API.userSignup(signup)

if(response.isSuccess){
    setsignup(signupInitialValues);
    setaccount('login')
}else{
   seterror("Something went wrong please try again later");
}
}
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

                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} className='txtfield' name='name' label='Enter Name' />
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} className='txtfield' name='username' label='Enter Username' />
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} className='txtfield' name='password' label='Enter Password' />
                    </div>
                    <div className="button-login">
                        {error && <error>{error}</error>}
                        <Button variant="contained" onClick={()=>signupUser()}>Sign Up</Button>
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