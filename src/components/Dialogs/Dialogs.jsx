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
   return (
      <div className={s.dialogs}>
         <div className={s.dialogs__items}>
            <DialogItem id='1' name='Dimych' />
            <DialogItem id='2' name='Andrey' />
            <DialogItem id='3' name='Sveta' />
            <DialogItem id='4' name='Sasha' />
            <DialogItem id='5' name='Viktor' />
            <DialogItem id='6' name='Valera' />
         </div>
         <div className={s.messages}>
            <Message message='Hi' />
            <Message message='How are you?' />
            <Message message='Yo' />
         </div>
      </div>
   )
}

export default Dialogs;