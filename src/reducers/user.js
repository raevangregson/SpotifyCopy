import { 
    UPDATE_USER, 
    } from '../constants'


const initialState = {
    user:{
        id: '',
        profilePicture: '',
        firstName: '',
        lastName: '',
        created: null,
    }
};

function user(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                user: action.user,
            })
        default:
            return state
        }
  }

export default user;
