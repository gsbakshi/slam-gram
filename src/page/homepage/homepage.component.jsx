import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './homepage.styles.scss';

import Feed from '../../components/feed/feed.component';
import FollowersColumn from '../../components/followers-column/followers-column.component';
import SuggestedBox from '../../components/suggested-box/suggested-box.component';

const addDataHeadingStyle = 'color: #61AFFE; font-weight: bold; font-size: 25px';
const fetchHeadingStyle = 'color: #F6A130; font-weight: bold; font-size: 25px';
const responseStyle = 'font-weight: bold';

const HomePage = () => {

    const [users, setUsers] = useState(null);
    const [userToToggle, setUserToToggle] = useState(null);
    
    let descendingUsers;
    let topFiveNotFollowing;
    let topFiveFollowing;

    //                                                                auto populating with dummy data
    const addData = async () => {
        //                                                                                          *
        console.log('%cAdding User Posts Data', addDataHeadingStyle);
        console.log('%cFunction /.netlify/functions/addData', responseStyle)
        //                                                                                          *

        let response = await axios.post('/.netlify/functions/addData');

        //                                                                                          *
        console.log('%cResponse from Adding Data', responseStyle);
        console.log(response)
        //                                                                                          *
        return response;

    };

    //                                                       fetch all the tik-tok posts to your feed
    const fetchData = async () => {
        //                                                                                          *
        console.log('%cGetting Fetched Posts', fetchHeadingStyle);
        console.log('%cFunction /.netlify/functions/posts', responseStyle);
        //                                                                                          *

        const results = await axios.get('/.netlify/functions/posts');
        
        //                                                                                          *
        console.log('%cResponse from Fetched Posts', responseStyle);
        console.log(results.data)
        //                                                                                          *

        setUsers(results.data);

    };

    //toggle user from followed to unfollowed
    if (userToToggle) {
        const newValue = userToToggle.is_followed ? false : true
        const data = { is_followed: newValue }

        axios.put('/.netlify/functions/edit', { userId: userToToggle.id, data: data })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err))
            .then(() => fetchData());
        setUserToToggle(null);
    };

    useEffect(() => {
        addData()
        fetchData()
    }, [])

    if (users) {
        descendingUsers = users.sort((a, b) => a.id < b.id ? 1 : -1);
        const following = users.filter(user => user.is_followed === true);
        const descendingFollowing = following.sort((a, b) => a.likes < b.likes ? 1 : -1);
        topFiveFollowing = descendingFollowing.slice(0, 5);

        const notFollowing = users.filter((user) => user.is_followed === false);
        const descendingNotFollowing = notFollowing.sort((a, b) => a.likes < b.likes ? 1 : -1);
        topFiveNotFollowing = descendingNotFollowing.slice(0, 5).filter(user => user.username !== 'aniak100');
    }

    return (
        <>
            {
                descendingUsers && (
                    <div className='home-page-container'>
                        <FollowersColumn users={ topFiveFollowing } />
                        <Feed
                            users={ descendingUsers }
                            toggleFollow={ userToToggle => setUserToToggle(userToToggle) }
                        />
                        <SuggestedBox
                            suggestedUsers={ topFiveNotFollowing }
                            toggleFollow={ userToToggle => setUserToToggle(userToToggle) }
                        />
                    </div>
                )
            }
        </>
    );
};

export default HomePage;