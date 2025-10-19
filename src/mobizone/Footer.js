import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <section className='container-fluid mt-2 wholefooter'>
                <section className='container text-white'>
                    <div className='row text-center p-3'>
                        <h1><i>MOBI ZONE</i> </h1>
                    </div>
                    <div className='row'>
                        <div className='col-3 footpara'>
                            <Link to={'/collection'}>
                                <p>iPhone</p>
                            </Link>
                        </div>
                        <div className='col-3 footpara'>
                            <Link to={'/collection'}>
                                <p>Samsung</p>
                            </Link>
                        </div>
                        <div className='col-3 footpara'>
                            <Link to={'/collection'}>
                                <p>Nothing</p>
                            </Link>
                        </div>
                        <div className='col-3 footpara'>
                            <Link to={'/collection'}>
                                <p>Realme</p>
                            </Link>
                        </div>
                    </div>
                </section>
                <h4 className='text-white text-center border-primary mt-5'>&copy;Design & Developed By Adil Khan</h4>
                <h5 className='text-danger text-center p-1'>All Rights Reservrd By MOBI ZONE&reg;</h5>
                <p className='text-white text-center pt-2 m-0'>📍 Hitech City, Madhapur, Hyderabad – 500081</p>
                <p className='text-white text-center '>📞 +91 1111111111 | ✉️ info@example.com</p>
            </section>
        </div>
    )
}

export default Footer
