import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.posts.map( post => <Post message={post.message} likes={post.likesCount} /> );

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        //alert(text);
        props.addPost(text);
    }

    return (
        <div className={s.posts__block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}></textarea>
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