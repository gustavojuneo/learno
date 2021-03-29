import styles from './styles.module.scss'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

interface HeaderProps {
  user: {
    name: string
    image: string
  }
}

export function Header({ user }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/images/logo-icon.svg" alt="Learno" />
        </a>
      </Link>

      <Link href="/profile">
        <a className={styles.profileAvatar}>
          <img src={user.image} alt={user.name} />
        </a>
      </Link>
    </header>
  )
}
