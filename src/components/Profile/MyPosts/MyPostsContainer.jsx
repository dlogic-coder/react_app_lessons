import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (/*prop*/) => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = /*props.*/store.getState();

                let addPost = () => {
                    let action = addPostActionCreator();
                    /*props.*/store.dispatch(action);
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    /*props.*/store.dispatch(action);
                }

                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                )
            }}
        </StoreContext.Consumer>
    );
}

export default MyPostContainer;