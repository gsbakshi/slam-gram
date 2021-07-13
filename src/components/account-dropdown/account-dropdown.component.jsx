import React from 'react';

import './account-dropdown.styles.scss';

import CustomButton from '../custom-buttom/custom-button.component';
import AnimatedArrow from '../animated-arrow/animated-arrow.component';

const AccountDropdown = ({ currentUser, toggleUser }) => (
    <div className='account-dropdown'>
        <div className='dropdown-items'>
            <span className='message'>Click on the button to { currentUser ? 'Logout' : 'Login' }</span>
            <span className='note'>This is just a simulated fuctionality and not an actual onboarding process.</span>
        </div>
        <AnimatedArrow down />
        <CustomButton onClick={ () => toggleUser() } >
            { currentUser ? 'Logout' : 'Login' }
        </CustomButton>
    </div>
);

export default AccountDropdown;