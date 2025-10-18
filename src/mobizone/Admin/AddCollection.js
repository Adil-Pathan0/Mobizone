import axios from 'axios'
import React, { useState } from 'react'

const AddCollection = () => {
    const [product, setProduct] = useState({ name: '', price: '', image: '' })
    const addnew = (c) => {
        const { name, value } = c.target
        console.log(name, value)
        setProduct({ ...product, [name]: value })
    }

    const submitHandler = (A) => {
        A.preventDefault()
        console.log(product);

        axios.post(`https://mobizone-json-api.onrender.com/mobileData`, product)
            .then(() => {
                setProduct ({ name: '', price: '', image: '' })
                alert(`Product Added`)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='container p-5'>
            <div className='col-lg-6 p-5 text-center shadow mx-auto'>
                <h1>Add Product</h1>
                <form onSubmit={submitHandler}>
                    <input type='text' name='name' onChange={addnew} placeholder='Enter The Name' className='form-control mb-3' />
                    <input type='number' name='price' onChange={addnew} placeholder='Enter price' className='form-control mb-3' />
                    <input type='text' name='image' onChange={addnew} placeholder='Enter Image Address' className='form-control mb-3' />
                    <input type='submit' className='form-control mb-3 text-bg-primary' />
                </form>
            </div>
        </div>
    )
}

export default AddCollection
