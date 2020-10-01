import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' }
   ]

   let messages = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' }
   ]

   let dialogsElements = dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );
   let messagesElements = messages.map( msg => <Message message={msg.message} /> );

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