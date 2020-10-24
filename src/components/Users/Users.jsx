import React from "react";
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/img/no_user.png';

class Users extends React.Component {

    /*constructor можно добавить, если хотим сразу получить юзеров с сервака*/
    /*constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            }
        );
    }*/

    /* 01 - Этот метод закомментировать, если подключим конструктор с тем кодом, что выше*/
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
        }
    }

    render() {
        return <div>
            {/* 02 - button закомментировать, если подключим конструктор с тем кодом, что выше*/}
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={ () => { this.props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;