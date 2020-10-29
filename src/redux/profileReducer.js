const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 20 }
    ],
    newPostText: 'DLogic',
    profile: null
};

const profileReducer = (state = initialState, action) => {

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

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})



export default profileReducer;