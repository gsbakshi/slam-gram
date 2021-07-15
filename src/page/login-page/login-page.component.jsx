import React from 'react';

import './login-page.styles.scss';

import CustomButton from '../../components/custom-buttom/custom-button.component';
import AnimatedArrow from '../../components/animated-arrow/animated-arrow.component';

const LoginPage = ({ toggleUser }) => (
    <div className='login-page-container'>
        <span>
            This is just a simulated fuctionality and not an actual onboarding process.
        </span>
        <div className='login-container'>
        <AnimatedArrow right />
        <CustomButton alternate onClick={ () => toggleUser() }>
            Login
        </CustomButton>
        <AnimatedArrow left />
        </div>
    </div>
);

export default LoginPage;