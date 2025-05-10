import React, { useEffect, useState } from 'react'
import logo from '../EventifyImages/Logo.png';

const HeaderComponent = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("Bengaluru");

    useEffect(() => {
        // Fetch cities when component mounts
        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: "India" })
        })
        .then(res => res.json())
        .then(data => setCities(data.data))
        .catch(err => console.error("Failed to fetch cities", err));
    }, []);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000" style={{ color: '#fff', marginLeft: '0.1cm' }}>
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        Eventify
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div claclassNamess="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">My Bookings</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Tickets</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Offers</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="cityDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedCity}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="cityDropdown" style={{maxHeight: '300px', overflowY: 'auto',maxWidth:'145px'}}>
                            {cities.map((city, index) => (
                            <li key={index}>
                                <button
                                className="dropdown-item"
                                onClick={() => setSelectedCity(city)}
                                >
                                {city}
                                </button>
                            </li>
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
