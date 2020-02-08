import { handleActions } from 'redux-actions';
import { usersActionType } from '../action/users'
const initialStates = { isLoading: false, usersList: false }
const UsersListReducer = handleActions(
  {
    [usersActionType.USERSLIST_REQUEST]: (state = initialStates, action) => ({
      ...state,
      isLoading: true
    }),
    [usersActionType.USERSLIST_SUCCESS]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true,
      data: action.payload
    }),
    [usersActionType.USERSLIST_FAILURE]: (state = initialStates, action) => ({
      ...state,
      isLoading: false,
      usersList: true
    })
  },
  initialStates
)
export default UsersListReducer