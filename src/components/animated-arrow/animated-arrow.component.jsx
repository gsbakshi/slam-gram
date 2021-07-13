import React from 'react';

import './animated-arrow.styles.scss';

const AnimatedArrow = ({ down, left, right, up, ...otherProps }) => (
    <div
        className={ `
            ${up ? 'up' : ''} 
            ${down ? 'down' : ''}
            ${left ? 'left' : ''} 
            ${right ? 'right' : ''} 
            arrow
        `}
        { ...otherProps }
        />
);

export default AnimatedArrow;