const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    // took from API (.../auth/me for authorised users)
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    // state = this._state.profilePage - такая замена тут будет
    switch (action.type) {
        case SET_USER_DATA:
            /* debugger */
            return {
                ...state ,
                ...action.data ,   // создаем новый объект, в кот. будут находиться userId, login, email
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})

export default authReducer;