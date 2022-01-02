import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div style={{ display: 'flex' }}>
                <div><img style={{ width: '60px' }} src={logo} alt="logo" /></div>
                <div >
                    <h4 className='padding-zero'>Petopia</h4>
                    <p className='padding-zero'>11th crosss,Indira Plaza</p>
                </div>
            </div>
            <div style={{display:'flex'}}>
                <p className='header-contact'>Contact Us</p>
                <p className='header-contact'>Cart</p>
                <p className='header-contact'>My Account</p>
            </div>
        </div>
    );
};

export default Header;