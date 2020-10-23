import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
            followed: false,
            fullName: 'Andrew T.',
            status: 'I am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
                followed: false,
                fullName: 'Dmytro K.',
                status: 'SEO',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
                followed: true,
                fullName: 'Maxim K.',
                status: 'Frontend',
                location: {city: 'Odessa', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
                followed: true,
                fullName: 'Vasyl B.',
                status: 'Backend',
                location: {city: 'Lviv', country: 'Ukraine'}
            }]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;