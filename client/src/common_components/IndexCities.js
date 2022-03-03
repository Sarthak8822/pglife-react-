import './Index_cities.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexCities() {
    
    return (
        <div className="page-container">
            <h1 className="city-heading py-5">
                Major Cities
            </h1>
            <div className="row justify-content-space-evenly">
                <div className="city-card-container col-md" >
                    <div className='city-crd'>
                        <Link to="/list" className="city-card rounder-circle">
                            <img src="img/delhi.png" className="city-img" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-card-container col-md">
                    <div className='city-crd'>
                        <Link to="/list" className="city-card rounder-circle">
                            <img src="img/mumbai.png" className="city-img" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-card-container col-md">
                    <div className='city-crd'>
                        <Link to="/list" className="city-card rounder-circle">
                            <img src="img/bangalore.png" className="city-img" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="city-card-container col-md">
                    <div className='city-crd'>
                        <Link to="/list" className="city-card rounder-circle">
                            <img src="img/hyderabad.png" className="city-img" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}