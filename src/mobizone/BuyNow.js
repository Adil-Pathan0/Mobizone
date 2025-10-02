import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BuyNow = () => {

    const [product, setproduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/mobileData/${id}`)
            .then((res) => {
                setproduct(res.data)
            })
            .catch((err) => console.error(err))
    })
    return (
        <section className='container py-2'>
            <div className='row align-items-center'>
                <div className='col-lg-5 col-md-6 col-sm-6  img-fluid'>
                    <img className='w-100 pimg' src={product.image} />
                </div>
                <div className='col-lg-7 col-md-6 col-sm-6 pt-4'>
                        <h2>Name : {product.name}</h2>
                        <h2>Brand : {product.company}</h2>
                        <h5>{product.model}, {product.color}, {product.storage}</h5>
                        <button className='btn btn-primary w-50'><b>Price : ₹{product.price}</b></button>
                    
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 w-100 my-3">
                        <h3 className='text-center'>Want to Buy? Fill This Form </h3>
                        <div className="card shadow-lg border-0 p-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BuyNow
