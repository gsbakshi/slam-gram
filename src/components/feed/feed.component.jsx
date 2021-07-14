import React from 'react';
import FeedCard from '../feed-card/feed-card.component';

const Feed = () => (
    // TODO
    <div className='feed'>
        <FeedCard />
        <FeedCard />
        {/* { descendingUsers.map((descendingUser, index) => (
            <Card
                key={ index }
                user={ descendingUser }
                toggleFollow={ userToToggle => setUserToToggle(userToToggle) }
            />
        )) } */}
    </div>
);

export default Feed;