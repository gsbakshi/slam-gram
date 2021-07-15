import React from 'react';

import './feed.styles.scss';

import FeedCard from '../feed-card/feed-card.component';

const Feed = ({ users, toggleFollow }) => (
    <div className='feed'>
        {
            users.map(
                (user, index) => (
                    <FeedCard
                        key={ user.id }
                        user={ user }
                        toggleFollow={ toggleFollow }
                    />
                )
            )
        }
    </div>
);

export default Feed;