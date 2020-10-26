import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {               // here "state = store.getState()"
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch( setTotalUsersCountAC(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;