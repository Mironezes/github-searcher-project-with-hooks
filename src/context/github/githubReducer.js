import { CLEAR_SEARCH, GET_REPS, GET_USER, SEARCH_USERS, SET_LOADING } from "../actionTypes"

const handlers = {
  [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false }),
  [GET_REPS]: (state, {payload}) => ({...state, repos: payload, loading: false }),
  [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false }),
  [SET_LOADING]: state => ({...state, loading: true }),
  [CLEAR_SEARCH]: state => ({...state, users: [] }),
  DEFAULT: state => state
}

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state,action)
}