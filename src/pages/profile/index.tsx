import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import { getSession, signOut } from 'next-auth/client'

import styles from './styles.module.scss'

export default function Profile() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>

      <main className={styles.homeContent}>
        <button type="button" onClick={() => router.back()}>
          Voltar
        </button>

        <button type="button" onClick={() => signOut()}>
          Sair
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
