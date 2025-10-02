import React, { useEffect, useState } from 'react'
import useCallAPI from './CallAPI'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Viewproducts = () => {
    const [products, setprducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/mobileData`)
            .then((res) => {
                    setprducts(res.data)
            })
            .catch((err) => console.log(err))
    })
    const deleteproduct = (pid)=>{
        axios.delete(`http://localhost:5000/mobileData/${pid}`)
        .then(()=> alert(`Product Deleted`))
        .catch((err)=> console.error(err))
    }



    return (
        <div>
            <div className="container py-5">
                <h2 className="text-center collection mb-4 fw-bold">Phone's Collection</h2>
                <div className="row g-4">
                    {products.map((product) => (
                        <div key={product.id} className="col-sm-6 col-xs-6 col-md-4 col-lg-3">
                            <div className="card shadow h-100 border-0">
                                <img src={product.image} className="card-img-top img-fluid" alt={product.name} />
                                <div className="card-body  text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-muted">₹{product.price}</p>
                                    <div className='card-footer'>
                                    <button className='btn btn-danger w-100' onClick={()=> deleteproduct(product.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Viewproducts
