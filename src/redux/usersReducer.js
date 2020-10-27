const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    // след. поля добавили когда 'pagination' рассматривали (пока значения жестко хардкодим для тестирования)
    pageSize: 100,            // количество юзеров настранице
    totalUsersCount: 0,      // всего юзеров
    currentPage: 1,          // текущая страница
    isFetching: false
};

const usersReducer = (state = initialState, action) => {

    // state = this._state.profilePage - такая замена тут будет
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users]               // for additing to array
                //users: state.users.map(u => u)        // the same as upper line
                users: state.users.map(u => {
                    if (u.id === action.userId) {        /// * (.userId)
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users]                 // for additing to array
                //users: state.users.map(u => u)          // the same as upper line
                users: state.users.map(u => {
                    if (u.id === action.userId) {          /// * (.userId)
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            //return {...state, users: [...state.users, ...action.users]}     /// добавляем в конец массива новых
            return {...state, users: action.users}                         /// а тут просто перезатираем

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}      /// ** (.currentPage)

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}       /// *** (.currentPage)                      /// а тут просто перезатираем

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

// ..AC - означает action creator
export const followAC = (userId) => ({type: FOLLOW, userId})         /// *
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})     /// **
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})     /// ***
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})     /// ***


export default usersReducer;