import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
            <div>
            <div className=" tt header text-primary" >
            <div className="">
            <div style={{height:'50px',padding:'0% 6%' , margin:'0px auto'}} className="headNav bg-dark fixed-top d-flex bd-highlight">
            <div className="p-1 deco flex-grow-1 bd-highlight"><Link className="text-white text-decoration-none logo" to="/"><h4>PHOTODIARY</h4></Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/"><h5>Home</h5></Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/dashboard"><h5>Dashboard</h5></Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/dashboard"><h5>Admin</h5></Link></div>
            <div className="p-2 bd-highlight"><Link className="text-white text-decoration-none" to="/login"><h5>Login</h5> </Link></div>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Navbar;