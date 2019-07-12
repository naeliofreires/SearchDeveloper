export const Types = {
  USE_REQUEST: "user/REQUEST",
  USER_SUCCESS: "user/SUCCESS"
};

const INITIAL_STATE = {
  user: null,
  users: [],
  error: false,
  fetching: false
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USE_REQUEST:
      return { ...state, fetching: true, error: null };
    case Types.USER_SUCCESS:
      return {
        ...state,
        user: null,
        fetching: false,
        users: [...state.users, action.payload.user]
      };
    default:
      return state;
  }
}

export const Creators = {
  userRequest: username => ({
    type: Types.USE_REQUEST,
    payload: { username }
  }),

  userSuccess: user => ({
    type: Types.USER_SUCCESS,
    payload: { user }
  })
};
