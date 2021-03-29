import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>

      <Header />
      <main>
        <h1>Learno</h1>
      </main>
    </>
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
