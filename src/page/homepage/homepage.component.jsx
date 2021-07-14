import React from 'react';

import './homepage.styles.scss';

import Feed from '../../components/feed/feed.component';
import FollowersColumn from '../../components/followers-column/followers-column.component';
import SuggestedBox from '../../components/suggested-box/suggested-box.component';

const HomePage = () => (
    <div className='home-page-container'>
        <FollowersColumn />
        <Feed />
        <SuggestedBox /> 
    </div>
);

export default HomePage;