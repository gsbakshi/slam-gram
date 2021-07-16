import React from 'react';

import './suggested-box.styles.scss';

import MiniCard from '../mini-card/mini-card.component';

const SuggestedBox = ({ suggestedUsers, toggleFollow }) => (
    <div className='suggested-box'>
        <div className='suggested'>
            <div className='suggested-title'>
                <h2 className='title'>Suggested Accounts</h2>
            </div>
            <div className='suggested-users'>
                {
                    suggestedUsers.map(
                        user => (
                            <MiniCard
                                key={ user.id }
                                user={ user }
                                toggleFollow={ toggleFollow }
                            />
                        )
                    )
                }
            </div>
        </div>
        <span className='note'>
            Do not click on follow button for @aniak100. Because it will break the app.
        </span>
    </div>
);

export default SuggestedBox;