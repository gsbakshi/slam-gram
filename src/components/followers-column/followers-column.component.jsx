import React from 'react';

import './followers-column.styles.scss';

import HomeIcon from '../home-icon/home-icon.component';
import FollowingIcon from '../following-icon/following-icon.component';
import MicroCard from '../micro-card/micro-card.component';

const FollowersColumn = ({ users }) => (
    <div className='followers-container'>
        <div className='followers-column'>
            <div className='followers-title'>
                <HomeIcon />
                <h2 className='title'>For You</h2>
            </div>
            <div className='followers-sub-title'>
                <FollowingIcon />
                <div className='sub'>Following</div>
            </div>
            <div className='top-followers'>
                <p>Your top accounts</p>
                {/* TODO */}
                {
                    users ?
                        users.map(
                        user => (
                            <MicroCard
                                key={ user.id } user={ user }
                            />
                        )
                        ) : (
                            <>
                            <MicroCard />
                            <MicroCard />
                            <MicroCard />
                            <MicroCard />
                            </>
                    )
                }
            </div>
        </div>
    </div>
);

export default FollowersColumn;