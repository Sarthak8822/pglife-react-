import './footer.css'
import React from 'react'

export default function Footer() {   
    return (
        <div className="footer">
            <div className="page-container footer-container">
                <div className="footer-cities row">
                    <div className="footer-city col-md">
                        <a href="/">PG in Delhi</a>
                    </div>
                    <div className="footer-city col-md">
                        <a href="/">PG in Mumbai</a>
                    </div>
                    <div className="footer-city col-md">
                        <a href="/">PG in Bangalore</a>
                    </div>
                    <div className="footer-city col-md">
                        <a href="/">PG in Hyderabad</a>
                    </div>
                    <div className="footer-copyright">© 2022 Copyright PG Life</div>
                </div>
            </div>
        </div>
    )
}