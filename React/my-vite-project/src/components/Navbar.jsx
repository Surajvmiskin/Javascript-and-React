import React from "react";
import myImage from '../assets/hescom-logo.png'

const Navbar = () => {
    return (
        <div className="navbar border-b 0">
            <img src={myImage} alt="My Image" className='w-20 h-20' />

            <button className="btn btn-ghost text-xl text-blue bg-base-300" >Electricity Billing</button>
        </div>
    );
}

export default Navbar;