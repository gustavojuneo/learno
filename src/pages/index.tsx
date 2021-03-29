import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

import { MdPlayArrow } from 'react-icons/md'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import styles from './home.module.scss'

let countdownTimeout: NodeJS.Timeout

export default function Home() {
  const [time, setTime] = useState(0.1 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  function handleStartCountDown() {
    setActive(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>

      <Header />
      <main className={styles.homeContent}>
        <div className={styles.countdown}>
          <div className={styles.countdownContent}>
            <span>
              {minuteLeft}
              {minuteRight}
            </span>
            <span>:</span>
            <span>
              {secondLeft}
              {secondRight}
            </span>
          </div>
        </div>

        <div className={styles.countdownButton}>
          <button type="button" onClick={handleStartCountDown}>
            <MdPlayArrow />
            Iniciar um ciclo
          </button>
        </div>
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
