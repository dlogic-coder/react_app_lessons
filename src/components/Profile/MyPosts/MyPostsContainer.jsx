import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";

/*const MyPostContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
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
}*/

let mapStateToProps = (state) => {               // here "state = store.getState()"
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;