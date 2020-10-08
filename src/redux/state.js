import { rerenderEntireTree } from "../render";

let state = {
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
      ]
   }
}

export let addPost = () => {
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0
   };

   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export default state;