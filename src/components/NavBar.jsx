import React from 'react';
import MenuItems from './MenuItems'; 
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

function NavBar() {
    const state = {clicked: false}

    const handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

        const MenuItem = MenuItems
        return(
            <nav className='NavbarItems'>
                <div className='navbar-container'>
                    <h1 className='navbar-logo'>Jaque<i className='fab fa-jaque'></i></h1>
                    <div className='menu-icon' onClick={ handleClick }>
                        <i className={ state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                    <ul className={ state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItem.map((item, index) => {
                            return ( 
                                <li key={index}>  
                                    <Link className={item.cName} to={`${item.path}`}>{item.title}</Link>
                                </li>
                            )
                        })}                
                    </ul>
                </div>
            </nav>
        );
    }


export default NavBar;