import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (/*props*/) => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = /*props.*/store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    let action = sendMessageCreator();
                    /*props.*/store.dispatch(action);
                }

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body);
                    /*props.*/store.dispatch(action);
                }

                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={state}/>
                )
            }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;