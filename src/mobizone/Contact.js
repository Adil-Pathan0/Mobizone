import React from "react";

export default function ContactUs() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
            <div className="row ">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 address">
                    <div>
                        <h4>📍 Office Address</h4>
                        <p>Plot No. 12, Tech Park Road, Hitech City,</p>
                        <p>Madhapur, Hyderabad, Telangana – 500081, India</p>
                    </div>
                    <div className="mt-4">
                        <h4>Contact Info.</h4>
                        <p>📞 Phone: +91 98765 43210</p>
                        <p>📧 Email: info@example.com</p>
                        <p>🌐 Website: www.example.com</p>
                    </div>
                    <div className="mt-4">
                        <h4>🕒 Office Hours:</h4>
                        <p>Monday – Friday: 9:00 AM – 6:30 PM</p>
                        <p>Saturday : 10:00 AM – 4:00 PM</p>
                        <p>Sunday : Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
