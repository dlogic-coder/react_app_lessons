import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
   let state = props.store.getState().dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
   let messagesElements = state.messages.map(msg => <Message message={msg.message} />);
   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs__items}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <div>
                  <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message" />
               </div>
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;