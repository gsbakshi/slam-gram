import React from 'react';

import './mini-card.styles.scss';

import MicroCard from '../micro-card/micro-card.component';
import FollowButton from '../follow-button/follow-button.component';

const MiniCard = ({ user, toggleFollow }) => (
    <div className='mini-card-container'>
        <MicroCard user={ user } />
        <FollowButton user={ user } toggleFollow={ toggleFollow } />
    </div>
);

export default MiniCard;