const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [/*
        {
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
            followed: false,
            fullName: 'Andrew T.',
            status: 'I am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: 2,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
            followed: false,
            fullName: 'Dmytro K.',
            status: 'SEO',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
        {
            id: 3,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
            followed: true,
            fullName: 'Maxim K.',
            status: 'Frontend',
            location: {city: 'Odessa', country: 'Ukraine'}
        },
        {
            id: 4,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg',
            followed: true,
            fullName: 'Vasyl B.',
            status: 'Backend',
            location: {city: 'Lviv', country: 'Ukraine'}
        }
    */]
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
            return {...state, users: [...state.users, ...action.users]}        /// ** (.users)
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})         /// *
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})      /// **

export default usersReducer;