import { renderHook, act } from '@testing-library/react'
import { AppProvider, useApp } from '@/contexts/AppContext'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AppProvider>{children}</AppProvider>
)

describe('AppContext', () => {
  it('provides initial state', () => {
    const { result } = renderHook(() => useApp(), { wrapper })
    
    expect(result.current.state.theme).toBe('light')
    expect(result.current.state.isLoading).toBe(false)
    expect(result.current.state.notifications).toEqual([])
  })

  it('updates theme', () => {
    const { result } = renderHook(() => useApp(), { wrapper })
    
    act(() => {
      result.current.dispatch({ type: 'SET_THEME', payload: 'dark' })
    })
    
    expect(result.current.state.theme).toBe('dark')
  })

  it('adds notification', () => {
    const { result } = renderHook(() => useApp(), { wrapper })
    
    act(() => {
      result.current.dispatch({ 
        type: 'ADD_NOTIFICATION', 
        payload: { type: 'success', message: 'Test notification' }
      })
    })
    
    expect(result.current.state.notifications).toHaveLength(1)
    expect(result.current.state.notifications[0].message).toBe('Test notification')
  })
})
