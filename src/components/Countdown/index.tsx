import { useContext } from 'react'
import { MdPlayArrow } from 'react-icons/md'

import { CountdownContext } from '../../contexts/CountdownContext'
import styles from './styles.module.scss'

export function Countdown() {
  const { minutes, seconds, startCountDown, resetCountDown } = useContext(
    CountdownContext
  )

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <div className={styles.countdown}>
        <div className={styles.countdownContent}>
          <span>
            {minuteLeft}
            {minuteRight}
          </span>
          <span>:</span>
          <span>
            {secondLeft}
            {secondRight}
          </span>
        </div>
      </div>

      <div className={styles.countdownButton}>
        <button type="button" onClick={startCountDown}>
          <MdPlayArrow />
          Iniciar um ciclo
        </button>
      </div>
    </>
  )
}
