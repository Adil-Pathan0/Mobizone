import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import Collection from './Collection'
import ContactUs from './Contact'
import AboutUs from './AboutUs'
import Error404 from './Error404'
import Dashboard from './Admin/Dashboard'
import AddCollection from './Admin/AddCollection'
import Welcome from './Admin/Welcome'
import BuyNow from './BuyNow'
import Viewproducts from './ViewProducts'
import AdminLogin from './Admin/AdminLogin'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/collection' Component={Collection} />
                <Route path='/contact' Component={ContactUs} />
                <Route path='/buynow/:id' Component={BuyNow} />
                <Route path='/aboutUs' Component={AboutUs} />
                <Route path='*' Component={Error404} />
                <Route path='/admin' Component={AdminLogin}/>
                <Route path='/dashboard' Component={Dashboard}>
                    <Route path='' Component={Welcome} />
                    <Route path='addcollection' Component={AddCollection} />
                    <Route path='viewproducts' Component={Viewproducts} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routing
