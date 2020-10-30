const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    // took from API (.../auth/me for authorised users)
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    // state = this._state.profilePage - такая замена тут будет
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state ,
                ...state.data ,   // создаем новый объект, в кот. будут находиться userId, email, login
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer;