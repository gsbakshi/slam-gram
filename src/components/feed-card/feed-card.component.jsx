import React from 'react';

import './feed-card.styles.scss';

import MicroCard from '../micro-card/micro-card.component';
import FollowButton from '../follow-button/follow-button.component';

const FeedCard = ({ user, toggleFollow }) => {

    // const timestamp = user.timestamp;
    // const timeStampReformat = timestamp.slice(2, 7);
    const timeStampReformat = '02 - 07 - 21';

    return (
        <div className='feed-card'>
            <div className="card-header">
                <MicroCard />
                <p>{ timeStampReformat }</p> 
                <FollowButton />
            </div>
            <div className='sub-header'>
                {/* <p>{ user.caption }</p> */ }
                <p>The new normal</p>
            </div>
            <video className="video" controls>
                {/* <source src={ user.video } type="video/mp4" /> */ }
            </video>
            <div className="card-info">
                <div className='icon-container'>
                    <div className='heart-outlined icon' />
                </div>
                {/* <div className="social-tag">{ user.likes }</div> */}
                <div className='icon-container'>
                    <div className='comment icon' />
                </div>
                {/* <div className="social-tag">{ user.comments }</div> */}
                <div className='icon-container'>
                    <div className='share icon' />
                </div>
            </div>
        </div>
    );
};

export default FeedCard;