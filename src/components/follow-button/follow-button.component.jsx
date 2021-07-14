import React from 'react';

import './follow-button.styles.scss';

const FollowButton = ({ user, toggleFollow }) => (
    <div
        className={ `
            ${user ? 'followed-button' : 'follow-button'} 
            button-container
            `}
        // TODO
    // onClick={ () => toggleFollow(user) }
    >
        {
            user ? (
                user.is_followed ? 'Following' : 'Follow'
            ) : (
                'Follow'
            )
        }
    </div>
);

export default FollowButton;