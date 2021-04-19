import styles from './styles.module.scss'

interface ProgressBarProps {
  width: number
}

export function ProgressBar({ width }: ProgressBarProps) {
  return (
    <div className={styles.progressBar}>
      <span style={{ width: `${width}%` }}></span>
    </div>
  )
}
