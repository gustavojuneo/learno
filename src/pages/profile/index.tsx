import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import { getSession, signOut, useSession } from 'next-auth/client'

import { FiArrowLeft, FiLogOut } from 'react-icons/fi'
import { BiTaskX, BiTask } from 'react-icons/bi'

import styles from './styles.module.scss'

export default function Profile() {
  const router = useRouter()
  const [session] = useSession()

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
            src={session?.user.image}
            alt={session?.user.name}
            className={styles.avatarProfile}
          />
          <span>{session?.user.name}</span>

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

        <button className={styles.signOutButton}>
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
    props: {}
  }
}
