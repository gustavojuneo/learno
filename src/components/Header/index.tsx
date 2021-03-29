import styles from './styles.module.scss'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

export function Header() {
  const [session] = useSession()

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/images/logo-icon.svg" alt="Learno" />
        </a>
      </Link>

      <Link href="/profile">
        <a className={styles.profileAvatar}>
          <img src={session?.user.image} alt={session?.user.name} />
        </a>
      </Link>
    </header>
  )
}
