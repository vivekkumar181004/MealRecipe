import React, { useState } from 'react';
import Sidebar from './sidebar';
import { faHome, faList, faCog, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation()

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Favorites",
            path: "/favorites",
            icon: faBookmark
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
            <div className='navbar container'>
                <Link  to={"/"} className='logo'>F<span>oo</span>dora</Link>
                <div className="nav-links" >
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            {showSidebar && <Sidebar close={closeSidebar} links={links} />}

        </>
    );
}

export default Navbar;
