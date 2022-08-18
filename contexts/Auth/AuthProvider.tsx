import { useContext, useEffect, useReducer } from 'react'
import { AuthContext, AuthDispatchContext } from './AuthContext'
import AuthReducer, { Dispatch } from './AuthReducer'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    authenticated: false,
    user: null,
    loading: true,
    token: null,
  })

  useEffect(() => {}, [])

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthContext)
export const useAuthDispatch: () => Dispatch = () =>
  useContext(AuthDispatchContext)
