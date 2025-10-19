import React from "react";
import vector from './assets/vector.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";


export default function AboutUs() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 fw-bold">About Us</h2>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <p className="lead">
                        Welcome to <strong className="fw-bold">MOBI ZONE</strong>, your trusted destination for the latest smartphones and gadgets.
                        We aim to bring you the best deals on top brands like iPhone and Samsung, with a seamless shopping experience.
                    </p>
                    <p>
                        Our mission is to make technology accessible to everyone while ensuring quality and customer satisfaction.
                        With a passion for innovation and excellence, we are here to serve your digital needs.
                    </p>
                    <div>
                        <button className="btn btn-primary m-2">
                            <i className="bi bi-facebook"></i>
                        </button>
                        <button className="btn btn-primary m-2">
                            <i className="bi bi-whatsapp"></i>
                        </button>
                        <button className="btn btn-primary m-2">
                            <i className="bi bi-twitter"></i>
                        </button>
                        <Link to={"https://www.instagram.com/adil_khan_7227?igsh=d3poNm90eHNhbjM3"}>
                            <button className="btn btn-primary m-2">
                                <i className="bi bi-instagram "></i>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={vector} alt="About Us" className="img-fluid rounded shadow" />
                </div>
            </div>
        </div >
    );
}
