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
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      FinishedCountdown()
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

  function FinishedCountdown() {
    new Audio('./notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Ciclo encerrado 🎉', {
        body: 'Hora de dar uma pausa!'
      })
    }
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
