import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

import { getSession } from 'next-auth/client'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import styles from './styles.module.scss'

export default function Tasks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>

      <Header />
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
    props: {}
  }
}
