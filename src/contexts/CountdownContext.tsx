import { createContext, ReactNode, useEffect, useState } from 'react'

interface CountdownContextData {
  minutes: number
  seconds: number
  isActive: boolean
  hasFinished: boolean
  startCountDown: () => void
  resetCountDown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeout: NodeJS.Timeout
const initialTime = 0.1 * 60

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(true)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(initialTime)
  }

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
