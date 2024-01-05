import React, { useState } from 'react'
import style from './SignUp.module.css'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    // const [user, setUser] = useState('');

    const auth = getAuth();

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential)=>{
            // setUser(userCredential.user);
            console.log('Sign Up Successfully');
            navigate('/login');
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className={style.SignUp}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' onChange={handleChange} value={formData.email} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={handleChange} value={formData.password} />
                </div>
                <button type='submit' >SignUp</button>
            </form>
        </div>
    )
}

export default SignUp