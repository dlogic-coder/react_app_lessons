import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {

   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'It\'s my first post', likesCount: 20 }
         ],
         newPostText: 'DLogic'
      },

      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
         ],
         messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' }
         ],
         newMessageBody: ""
      },

      sidebar: {}
   },

   _callSubscriber() { },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   /* _addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },

   _updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   }, */

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
   }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
   return {
       type: UPDATE_NEW_POST_TEXT, 
       newText: text
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => {
   return {
       type: UPDATE_NEW_MESSAGE_BODY,
       body: text
   }
}

export default store;

//window.store = store;

// store - OOP