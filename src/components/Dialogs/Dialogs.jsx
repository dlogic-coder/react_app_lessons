import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
   );
}

const Message = (props) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   );
}

const Dialogs = (props) => {

let dialogsData = [
   {id: 1, name: 'Dimych'},
   {id: 2, name: 'Andrey'},
   {id: 3, name: 'Sveta'},
   {id: 4, name: 'Sasha'},
   {id: 5, name: 'Viktor'},
   {id: 6, name: 'Valera'}
]

let messagesData = [
   {id: 1, message: 'Hi'},
   {id: 2, message: 'How are you?'},
   {id: 3, message: 'Yo'},
   {id: 4, message: 'Yo'}
]

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs__items}>
            <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
            <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
         </div>
         <div className={s.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
         </div>
      </div>
   )
}

export default Dialogs;