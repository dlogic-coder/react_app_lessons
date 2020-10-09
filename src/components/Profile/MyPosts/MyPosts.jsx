import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likesCount} />);

    let newPost = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch({type:'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        //props.updateNewPostText(text);
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={s.posts__block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;