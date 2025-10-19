import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiry, setenquiry] = useState([])

    useEffect(() => {
        axios.get(`https://mobizone-json-api.onrender.com/mobileData`)
            .then((res) => setenquiry(res.data))
            .catch((err) => console.error(err))
    })


    return (
        <div>
            <div className='container mt-3 '>
                <div className='row'>
                    <div className='col-lg-3 '>
                        <div className='card p-3 my-1 text-center shadow'>
                            <h4>All Products</h4>
                            <h3>{enquiry.length}+</h3>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card p-3 my-1 text-center shadow'>
                            <h4>This Year Added</h4>
                            <h3>{enquiry.length/4}+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEnquiries
