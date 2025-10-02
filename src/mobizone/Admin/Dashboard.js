import React, { useContext, useEffect } from 'react'
import Header from '../header'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { loginstatus } from '../../App'

const Dashboard = () => {
    const [login, setlogin] = useContext(loginstatus)
    const navigate = useNavigate()

    useEffect(()=>{
        if(login === false){
            navigate('/admin')
        }
    }, [login])
    return (
        <>
            <section className='container-fluid  my-5 shadow'>
                <div className='row'>
                    <div className='col-lg-3 '>
                        <aside className='text-center aside p-3'>
                            <Link to={''}>
                                <h4>Admin's Dashboard</h4>
                            </Link>
                            <Link to={"addcollection"}>
                                <button className=' border border-dark rounded p-2'>Add Product </button>
                            </Link>
                            <Link to={"viewproducts"}>
                                <button className=' border border-dark rounded p-2'>View Product's</button>
                            </Link>
                            <button className=' border border-dark rounded p-2'>View Enquiries</button>
                            <button onClick={()=> setlogin(false)} className='border border-dark rounded p-2'>Logout</button>
                        </aside>
                    </div>
                    <div className='col-lg-9'>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
