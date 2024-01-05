import React, { useState } from 'react'
import style from './Login.module.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

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
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential)=>{
            // setUser(userCredential.user);
            console.log('Sign In Successfully')
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className={style.Login}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' onChange={handleChange} value={formData.email} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={handleChange} value={formData.password} />
                </div>
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default Login