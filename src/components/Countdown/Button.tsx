import styles from './styles.module.scss'
import { MdClose, MdPlayArrow } from 'react-icons/md'
import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'

export function Button() {
  const { startCountDown, resetCountDown, hasFinished, isActive } = useContext(
    CountdownContext
  )

  return (
    <div className={styles.timerButton}>
      {hasFinished ? (
        <button type="button" onClick={resetCountDown}>
          <MdPlayArrow />
          Iniciar
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" onClick={resetCountDown}>
              <MdClose />
              Parar
            </button>
          ) : (
            <button type="button" onClick={startCountDown}>
              <MdPlayArrow />
              Iniciar
            </button>
          )}
        </>
      )}
    </div>
  )
}
