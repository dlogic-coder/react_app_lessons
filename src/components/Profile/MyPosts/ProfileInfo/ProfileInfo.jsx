import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='http://localhost:3000/human-brain.jpg' />
            </div>
            <div className={s.description__block}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;