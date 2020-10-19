import React from "react";

const StoreContext = React.createContext(null);

// for Lesson 45
export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;