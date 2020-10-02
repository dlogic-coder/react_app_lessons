import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

   let dialogsElements  = props.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );
   let messagesElements = props.messages.map( msg => <Message message={msg.message} /> );

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs__items}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;