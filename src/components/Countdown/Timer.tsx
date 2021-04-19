import { useContext } from 'react'

import { CountdownContext } from '../../contexts/CountdownContext'

import { ProgressBar } from './ProgressBar'

import styles from './styles.module.scss'

export function Timer() {
  const { initialTime, time, minutes, seconds } = useContext(CountdownContext)

  const formatedMinutes = String(minutes).padStart(2, '0')
  const formatedSeconds = String(seconds).padStart(2, '0')

  const countProgress = Math.round((initialTime - time) * 100) / initialTime

  return (
    <div className={styles.timer}>
      <div className={styles.timerContent}>
        <span>{formatedMinutes}</span>
        <span>:</span>
        <span>{formatedSeconds}</span>
      </div>

      <ProgressBar width={countProgress} />
    </div>
  )
}
