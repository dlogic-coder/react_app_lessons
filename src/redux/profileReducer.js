const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 20 }
    ],
    newPostText: 'DLogic'
};

const profileReducer = (state = initialState, action) => {

    //let stateCopy;

    // state = this._state.profilePage - такая замена тут будет
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
            //stateCopy.posts = [...state.posts];     // copy array "state.posts"
            //stateCopy.posts.push(newPost);
            //stateCopy.newPostText = '';
            //return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            //stateCopy.newPostText = action.newText;
            //return stateCopy;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;