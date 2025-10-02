import React from 'react'
import error404 from './assets/error404.gif'
import errorsorry from './assets/errorsorry.jpg'
import { Link } from 'react-router'


const Error404 = () => {
    return (
        <div>
            <section className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-7 col-md-6'>
                        <img className='error404' src={error404} />
                    </div>
                    <div className='col-lg-5 col-md-6 errortext'>
                        <img src={errorsorry} />
                        <h2>Sorry! You Are On Wrong Page</h2>
                        <p>Please Go Back For Continuous Shopping</p>
                        <button className='btn btn-success'><Link className='text-white' to="/"><h4>Home</h4></Link></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Error404