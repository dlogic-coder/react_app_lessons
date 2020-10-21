import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
//import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

/*const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    let action = sendMessageCreator();
                    store.dispatch(action);
                }

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body);
                    store.dispatch(action);
                }

                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={state}/>
                )
            }}
        </StoreContext.Consumer>
    );
}*/

//let f1 = (state) => {
let mapStateToProps = (state) => {               // here "state = store.getState()"
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageCreator();
            dispatch(action);
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default /*DialogsContainer*/ SuperDialogsContainer;