import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginstatus } from '../../App'

const AdminLogin = () => {
    const [detail, setdetail] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const [login, setlogin] = useContext(loginstatus)

    const change = ((e) => {
        const { name, value } = e.target
        setdetail({ ...detail, [name]: value })
    })

    const submitHandler = ((e) => {
        e.preventDefault()
        const { email, password } = detail
        if (email === 'mobizone@admin.com' && password === 'admin') {
            setlogin(true)
            alert(`Successfully Loged in`)
            navigate('/dashboard')
        }
        else {
            alert(`Please Check Your Email And Password.`)
        }
    })

    return (
        <section className='Container p-5'>
            <div className='col-lg-6 col-md-6 shadow mx-auto p-5'>
                <h2 className='text-center '>Admin's Login</h2>
                <form onSubmit={submitHandler}>
                    <input type='email' name='email' placeholder='Email Address' onChange={change} className='form-control mb-3' />
                    <input type='password' name='password' placeholder='Enter Password' onChange={change} className='form-control mb-3' />
                    <input type='submit' className='form-control bg-primary mb-3' />
                </form>
            </div>
        </section>
    )
}

export default AdminLogin
