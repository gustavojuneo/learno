import { GetServerSideProps } from 'next'
import { getSession, signOut } from 'next-auth/client'

export default function Profile() {
  return <button onClick={() => signOut()}>Sair</button>
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
