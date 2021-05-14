import React, {useEffect, useState} from 'react';
import bingeboxLogo from './bingebox-logo.svg';
import './Nav.css';
function Nav() {
    const [show, handleShow] = useState(false); 

    // const handleShow(show) => {
    //     if (show) {

    //     }
    // }
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);

        return () => {
            window.removeEventListener('scroll');
        }
        },[])
        
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src={bingeboxLogo}
             alt="bingebox-logo" className="nav__logo"/>

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="nav__avatar"/>
        </div>
    )
}

export default Nav;
