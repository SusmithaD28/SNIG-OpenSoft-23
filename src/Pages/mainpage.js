import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer.js";


function mainpage() {
  return (
    <>
    <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
            <img src="logo192.png" width="40" height="40" alt=""></img>
        </a> 
        <span className="navbar-text mr-1">
            <Link to="/login">LOGIN</Link>
            <a> / </a>
            <Link to="/signup">SIGNUP</Link>
            <a> </a>
        </span>
    </nav>
    <div className="card mb-3 mt-3 w-25 mx-auto border-0">
        <img className="card-img-top" src="main.jpg" alt="Card image cap"></img>
    </div>

    <div className="row mx-auto">
        <div className="col-sm-4">
            <div className="card mb-5">
                <div className="card-body">
                    <h1 className="card-title text-center">Heading1</h1>
                    <p className="card-text text-center">Text1</p>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card mb-5">
                <div className="card-body">
                    <h1 className="card-title text-center">Heading2</h1>
                    <p className="card-text text-center">Text2</p>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title text-center">Heading3</h1>
                    <p className="card-text text-center">Text3</p>
                </div>
            </div>
        </div>
    </div>

    <div>
      <Footer/>
    </div>   


    </>
  )
}

export default mainpage;
