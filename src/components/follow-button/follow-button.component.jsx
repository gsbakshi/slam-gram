import React from 'react';

import './follow-button.styles.scss';

const FollowButton = ({ user, toggleFollow }) => (
    <div
        className={ `
            ${user.is_followed ? 'followed-button' : 'follow-button'}
            button-container
            `}
        onClick={ () => toggleFollow(user) }
    >
        { user.is_followed ? 'Following' : 'Follow' }
    </div>
);

export default FollowButton;