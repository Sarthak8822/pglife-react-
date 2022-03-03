import './Navbar.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-modal/lib/components/Modal';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [signUpshow, setSignUpshow] = useState(false);
    const handleSignupclose = () => setSignUpshow(false);
    const handleSignupshow = () => setSignUpshow(true);

    const [loginshow, setLoginshow] = useState(false);
    const handleLoginclose = () => setLoginshow(false);
    const handleLoginshow = () => setLoginshow(true);

    return (
        <>
            <div className="Header sticky-top" >
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid justify-content-front">
                        <Link className="navbar-brand" to="/">
                            <img src="./img/logo.png" alt="" />
                        </Link>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleSignupshow}>
                                        <i className="fas fa-user" ></i>Signup
                                    </a>
                                </li>
                                <div className="nav-vl"></div>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleLoginshow}>
                                        <i className="fas fa-sign-in-alt"></i>Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <Modal show={signUpshow} onHide={handleSignupclose}>
                <Modal.Header closeButton>
                    <Modal.Title>SignUp with PgLife</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="signup-form" className="form" role="form">
                        <div className="input-group py-2 form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="full_name" placeholder="Full Name" maxlength="30" required />
                        </div>

                        <div className="input-group py-2 form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="phone" placeholder="Phone Number" maxlength="10" minlength="10" required />
                        </div>

                        <div className="input-group py-2 form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Email" required />
                        </div>

                        <div className="input-group py-2 form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
                        </div>

                        <div className="input-group py-2 form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-university"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="college_name" placeholder="College Name" maxlength="150" required />
                        </div>

                        <div className="form-group">
                            <span className='form-gender'>I'm a </span>
                            <div className='col'>
                                <input type="radio" className="ml-3" id="gender-male" name="gender" value="male" />
                                <label for="gender-male">
                                    Male
                                </label>
                            </div>
                            <div className='col'>
                                <input type="radio" className="ml-3" id="gender-female" name="gender" value="female" />
                                <label for="gender-female">
                                    Female
                                </label>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSignupclose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSignupclose}>
                        Create Account
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={loginshow} onHide={handleLoginclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login with PgLife</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form id="login-form" class="form" role="form">
                        <div class="input-group form-group py-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <input type="email" class="form-control" name="email" placeholder="Email" required />
                        </div>
                        <div class="input-group form-group py-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" class="form-control" name="password" placeholder="Password" minlength="6" required />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLoginclose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLoginclose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



