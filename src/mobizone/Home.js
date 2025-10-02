import React from 'react'
import carouselApple from './assets/carouselApple.webp'
import carouselSamsung from './assets/carouselSamsung.webp'
import carouselNothing from './assets/carouselNothing.webp'
import carouselRealme from './assets/carouselRealme.webp'
import AppleLogo from './assets/AppleLogo.png'
import SamsungLogo from './assets/SamsungLogo.png'
import NothingLogo from './assets/NothingLogo.png'
import RealmeLogo from './assets/RealmeLogo.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <main>
        <section className='container-fluid bg-dark p-0'>
          <div id="myCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item  active">
                <img src={carouselApple} className="d-block w-100 " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carouselSamsung} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carouselNothing} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carouselRealme} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className='container mt-3'>
          <h1>Top Brands</h1>
          <div className='row topbrands'>
            <div className='col-3 logo p-0'>
              <Link to="/collection"><img src={AppleLogo} /></Link>
            </div>
            <div className='col-3 logo p-0'>
              <Link to="/collection"><img src={SamsungLogo} /></Link>
            </div>
            <div className='col-3 logo p-0'>
              <Link to={'/collection'}><img src={NothingLogo} /></Link>
            </div>
            <div className='col-3 logo p-0'>
              <Link to={'/collection'}><img src={RealmeLogo} /></Link>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
              <div className='card shadow offcard border-0'>
                <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1606975243181/apple-offers.jpg" className='rounded ' />
                <div className='card-body text-center'>
                  <p className='card-title'>iPhone Upto 25% Off</p>
                  <p className='card-text'>(Terms & Conditions Apply)</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
              <div className='card shadow offcard border-0'>
                <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1629897460988/samsung-coupons.jpg" className='rounded ' />
                <div className='card-body text-center'>
                  <p className='card-title'>Samsung Upto 50% Off</p>
                  <p className='card-text'>(Terms & Conditions Apply)</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
              <div className='card shadow offcard border-0'>
                <img src="https://t4.ftcdn.net/jpg/03/98/30/87/360_F_398308795_N96MhyvGmyjtfFoFD7rhsZaUNFMmBAMO.jpg" className='rounded ' />
                <div className='card-body text-center'>
                  <p className='card-title'>Nothing Upto 25% Off</p>
                  <p className='card-text'>(Terms & Conditions Apply)</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
              <div className='card shadow offcard border-0'>
                <img src="https://t4.ftcdn.net/jpg/03/98/30/87/360_F_398308795_N96MhyvGmyjtfFoFD7rhsZaUNFMmBAMO.jpg" className='rounded ' />
                <div className='card-body text-center'>
                  <p className='card-title'>Realme Upto 25% Off</p>
                  <p className='card-text'>(Terms & Conditions Apply)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
