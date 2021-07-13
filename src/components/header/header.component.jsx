import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo/vector/default-monochrome.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/upload'> UPLOAD ICON </Link>
            <Link className='option' to='/user'> USER DP </Link>
        </div>
    </div>
);

export default Header;
