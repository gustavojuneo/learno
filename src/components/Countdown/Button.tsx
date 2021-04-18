import styles from './styles.module.scss'
import { MdClose, MdPlayArrow } from 'react-icons/md'
import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'

export function Button() {
  const { startCountDown, resetCountDown, hasFinished, isActive } = useContext(
    CountdownContext
  )

  return (
    <div className={styles.countdownButton}>
      {hasFinished ? (
        <button type="button" onClick={resetCountDown}>
          <MdPlayArrow />
          Iniciar novo ciclo
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" onClick={resetCountDown}>
              <MdClose />
              Abandonar ciclo
            </button>
          ) : (
            <button type="button" onClick={startCountDown}>
              <MdPlayArrow />
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}
