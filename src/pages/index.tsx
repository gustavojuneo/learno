import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

export default function Home() {
  return (
    <div>
      <Head>
        <title>App</title>
      </Head>

      <main>
        <h1>Learno</h1>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
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
