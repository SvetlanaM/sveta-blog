type User = {
  email: string;
  name: string;
} | null;

type Token = {
  token: string
} | null

export type AuthState = {
  authenticated: boolean;
  user: User;
  loading: boolean;
  token: Token;
}

type Action =
  | { type: 'SET_USER_INFO', payload: User, token: Token }
  | { type: 'SET_LOADING', payload: boolean }
  | { type: 'SET_LOGOUT'}
  | { type: 'SET_NONE' }
  | { type: 'SET_TOKEN', token: Token }

export type Dispatch = React.Dispatch<Action> | null

export default (state: AuthState, action:Action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        token: action.token
    }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
    }
    case "SET_LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null
    }
    default:
      return state
  }
}  