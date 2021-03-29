import styles from './styles.module.scss'
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/images/logo-icon.svg" alt="" />
        </a>
      </Link>

      <Link href="/profile">
        <a className={styles.profileAvatar}>
          <img
            src="https://avatars.githubusercontent.com/u/44280939?v=4"
            alt="Gustavo Juneo"
          />
        </a>
      </Link>
    </header>
  )
}
