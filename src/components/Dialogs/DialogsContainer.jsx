import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import MyPosts from "../Profile/MyPosts/MyPosts";

const DialogsContainer = (props) => {
   let state = props.store.getState().dialogsPage;

   let onSendMessageClick = () => {
      let action = sendMessageCreator();
      props.store.dispatch(action);
   }

   let onNewMessageChange = (body) => {
      let action = updateNewMessageBodyCreator(body);
      props.store.dispatch(action);
   }

   return (
      <Dialogs updateNewMessageBody={onNewMessageChange}
               sendMessage={onSendMessageClick}
               dialogsPage={state} />
   )
}

export default DialogsContainer;