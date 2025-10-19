import React, { useEffect, useState } from 'react'
import useCallAPI from './CallAPI'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Collection = () => {
    const [products, setprducts] = useState([])
    const [company, setcompany] = useState('')

    useEffect(() => {
        axios.get(`https://mobizone-json-api.onrender.com/mobileData`)
            .then((res) => {
                if (company === '') {
                    setprducts(res.data)
                }
                else {
                    const result = res.data.filter((p) => p.company === company)
                    setprducts(result)
                }
            })
            .catch((err) => console.log(err))
    })


    const change = ((e) => {
        setcompany(e.target.value)
    })

    return (
        <div>
            <div className="container py-5">
                <h2 className="text-center collection mb-4 fw-bold">Phone's Collection</h2>
                <div className='col-lg-4 col-md-6 mx-auto my-3'>
                    <select className='form-control' onChange={change}>
                        <option>iPhone</option>
                        <option>Samsung</option>
                        <option>Nothing</option>
                        <option>Realme</option>
                    </select>
                </div>
                <div className="row g-4">
                    {products.map((product) => (
                        <div key={product.id} className="col-sm-6 col-xs-6 col-md-4 col-lg-3">
                            <div className="card shadow h-100 border-0">
                                <img src={product.image} className="card-img-top img-fluid" loading='lazy' alt={product.name} />
                                <div className="card-body mt-auto  text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-muted">₹{product.price}</p>
                                    <Link to={`/buynow/${product.id}`}>
                                        <button className="btn btn-dark w-100">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection
