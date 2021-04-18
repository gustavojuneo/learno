import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import styles from './home.module.scss'
import { CountdownProvider } from '../contexts/CountdownContext'
import { Countdown } from '../components/Countdown'

interface HomeProps {
  user: {
    name: string
    image: string
  }
}

export default function Home({ user }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Learno</title>
      </Head>

      <CountdownProvider>
        <Header user={user} />
        <main className={styles.homeContent}>
          <Countdown />
        </main>
        <Footer />
      </CountdownProvider>
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
