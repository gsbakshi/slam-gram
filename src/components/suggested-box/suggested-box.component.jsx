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
                    suggestedUsers ?
                        suggestedUsers.map(
                            user => (
                                <MiniCard
                                    key={ user.id }
                                    user={ user }
                                    toggleFollow={ toggleFollow }
                                />
                            )
                        ) : (
                            <>
                                <MiniCard />
                                <MiniCard />
                            </>
                        )
                }
            </div>
        </div>
    </div>
);

export default SuggestedBox;