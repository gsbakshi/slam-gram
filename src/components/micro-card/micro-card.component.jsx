import React from 'react';

import './micro-card.styles.scss';

const MicroCard = ({ user }) => (
    <div className='micro-card-container'>
        <div className='user-icon-container'>
            {
                user ? (
                    <img className='user-icon' src={ user.avatar } alt='user' />
                ) : (
                    <div className='na-user' />
                )
            }
        </div>
        <div className='user-details'>
            <div className='username'>
                { user ? user.username : 'username' }
            </div>
            <div className='name'>
                { user ? user.name : 'name' }
            </div>
        </div>
    </div>
);

export default MicroCard;