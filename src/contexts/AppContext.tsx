'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// Types
export interface AppState {
  theme: 'light' | 'dark'
  isLoading: boolean
  notifications: Notification[]
}

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  timestamp: Date
}

// Action Types
type AppAction =
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }

// Initial State
const initialState: AppState = {
  theme: 'light',
  isLoading: false,
  notifications: []
}

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    
    case 'ADD_NOTIFICATION':
      const notification: Notification = {
        ...action.payload,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date()
      }
      return { ...state, notifications: [...state.notifications, notification] }
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      }
    
    default:
      return state
  }
}

// Context
const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Hook
export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

// Action Creators
export const appActions = {
  setTheme: (theme: 'light' | 'dark') => ({ type: 'SET_THEME' as const, payload: theme }),
  setLoading: (loading: boolean) => ({ type: 'SET_LOADING' as const, payload: loading }),
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => ({ 
    type: 'ADD_NOTIFICATION' as const, 
    payload: notification 
  }),
  removeNotification: (id: string) => ({ type: 'REMOVE_NOTIFICATION' as const, payload: id })
}
