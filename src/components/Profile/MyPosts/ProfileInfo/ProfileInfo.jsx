import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import photo from "../../../../assets/img/human-brain.jpg"

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={photo} />
            </div>
            <div className={s.description__block}>
                ava + description
            </div>

            <div className={s.description__block}>
                {/* Show profile of user (by userId) */}
                <img src={props.profile.photos.large}/>
                <div><b>обо мне:</b> {props.profile.aboutMe}</div>

                <h4>Контакты</h4>

                <div><b>facebook:</b> {props.profile.contacts.facebook}</div>
                <div><b>website:</b> {props.profile.contacts.website}</div>
                <div><b>vk:</b> {props.profile.contacts.vk}</div>
                <div><b>twitter:</b> {props.profile.contacts.twitter}</div>
                <div><b>instagram:</b> {props.profile.contacts.instagram}</div>
                <div><b>youtube:</b> {props.profile.contacts.youtube}</div>
                <div><b>github:</b> {props.profile.contacts.github}</div>
                <div><b>mainLink:</b> {props.profile.contacts.mainLink}</div>

                <h4>Обо мне</h4>

                <div><b>поиск работы:</b> {props.profile.lookingForAJob}</div>
                <div><b>какую работу ищу:</b> {props.profile.lookingForAJobDescription}</div>
                <div><b>полное имя:</b> {props.profile.fullName}</div>
                <div><b>userId:</b> {props.profile.userId}</div>
                <h4>Фото</h4>
                <div><img src={props.profile.photos.small}/></div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;