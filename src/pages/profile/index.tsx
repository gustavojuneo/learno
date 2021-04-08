import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import { getSession, signOut, useSession } from 'next-auth/client'

import { FiArrowLeft, FiLogOut } from 'react-icons/fi'
import { BiTaskX, BiTask } from 'react-icons/bi'

import styles from './styles.module.scss'
import Link from 'next/link'

interface ProfileProps {
  user: {
    name: string
    image: string
  }
}

export default function Profile({ user }: ProfileProps) {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>

      <button
        className={styles.backButton}
        type="button"
        onClick={() => router.back()}
      >
        <FiArrowLeft />
      </button>

      <main className={styles.profileContent}>
        <div className={styles.userInfo}>
          <img
            src={
              user.image
                ? user.image
                : 'https://lh3.googleusercontent.com/proxy/FSUKzzbJDIT12up8j5OBCJwt9l4XM-tFmMxxh90c5GlLpVWBvDibQOMI13qgD6Qtl-ICNr0oGFeOfHh9BXPzwvqT'
            }
            alt={user.name}
            className={styles.avatarProfile}
          />
          <span>{user.name}</span>

          <div className={styles.taskInfo}>
            <span>
              <BiTask />
              150
            </span>

            <span>
              <BiTaskX />
              150
            </span>
          </div>
        </div>

        <nav className={styles.profileOptions}>
          {user.name !== 'guest' && (
            <Link href="/profile">
              <a>Editar perfil</a>
            </Link>
          )}

          <Link href="/profile">
            <a>Notificações</a>
          </Link>
        </nav>

        <button className={styles.signOutButton} onClick={() => signOut()}>
          <FiLogOut />
          Sign out
        </button>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const { guest } = req.cookies

  if (!session && guest !== 'guest_user') {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: {
        name: session?.user.name || 'guest',
        image: session?.user.image || ''
      }
    }
  }
}
