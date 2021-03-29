import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>

      <Header />
      <main></main>
      <Footer />
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
