import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {               // here "state = store.getState()"
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;