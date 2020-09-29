import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='http://localhost:3000/human-brain.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;