import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import styles from './styles.module.scss'

interface TasksProps {
  user: {
    name: string
    image: string
  }
}

let countdownTimeout: NodeJS.Timeout

export default function Tasks({ user }: TasksProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atividades | Learno</title>
      </Head>

      <Header user={user} />
      <main>
        <h1>Tasks</h1>
      </main>
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
    props: {
      user: {
        name: session?.user.name || 'guest',
        image: session?.user.image || ''
      }
    }
  }
}
