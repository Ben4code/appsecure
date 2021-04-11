import React, {createContext, useReducer} from 'react'
import firebase from 'firebase'
import {NewsItem} from '../services/newsAPI'

export interface Quote {
  text: string
}

interface IAction {
  type: string
  payload: any
}

interface IState {
  isAuthUser: boolean
  quotes: Quote[]
  user: firebase.User | null
  news: NewsItem[]
}

const initialState: IState = {
  isAuthUser: false,
  user: null,
  news: [],
  quotes: [
    {
      text: 'Hello world consectetur adipisicing elit. Assumenda, facere.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, facere. Vel, ipsam labore! In officia inventore labore modi qui ad 2'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, facere. Vel, ipsam labore! In officia inventore labore modi qui ad 3'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, facere. Vel, ipsam labore! In officia inventore labore modi qui ad 4'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, facere. Vel, ipsam labore! In officia inventore labore modi qui ad 5'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, facere. Vel, ipsam labore! In officia inventore labore modi qui ad 6'
    }
  ]
}

export const AuthContext = createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
  switch (action.type){
    case 'FETCH_AUTH_USER':
      return { ...state, isAuthUser: action.payload}
      case 'FETCH_NEWS':
        return { ...state, news: [...action.payload]}
    default:
      return state
  }
}

function AuthContextProvider(props: any): JSX.Element{
  const [state, dispatch] = useReducer(reducer, initialState)  

  return (
    <AuthContext.Provider value = {{state, dispatch}}>
    <div>
      {props.children}
    </div>
  </AuthContext.Provider>
  )
}

export default AuthContextProvider