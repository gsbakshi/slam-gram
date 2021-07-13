import React from 'react';

import './user-icon.styles.scss';

const UserIcon = ({ toggleAccountDropdownHidden, currentUser }) => (
    <div className='user-icon-container' onClick={ toggleAccountDropdownHidden }>
        <div className={ `${currentUser ? 'current-user' : ''}  user-icon` } />
    </div>
);

export default UserIcon;