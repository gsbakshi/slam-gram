import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/logo/vector/default-monochrome.svg';

import UserIcon from '../user-icon/user-icon.component';
import UploadIcon from '../upload-icon/upload-icon.component';
import AccountDropdown from '../account-dropdown/account-dropdown.component';

const Header = ({ toggleAccountDropdownHidden, currentUser, toggleUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            {
                currentUser ? (
                    <Link className='option' to='/upload'>
                        <UploadIcon />
                    </Link>
                ) : null
            }
            <UserIcon
                toggleAccountDropdownHidden={ toggleAccountDropdownHidden }
                currentUser={ currentUser }
            />
        </div>
        {
            hidden ? null : (
                <AccountDropdown
                    currentUser={ currentUser }
                    toggleUser={ toggleUser }
                />
            )
        }
    </div>
);

export default Header;