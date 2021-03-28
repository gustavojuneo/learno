import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSession } from 'next-auth/client'

import styles from './styles.module.scss'
import common from '../../styles/common.module.scss'
import { GoogleButton } from '../../components/GoogleButton'
import { GithubButton } from '../../components/GithubButton'
import { GuestButton } from '../../components/GuestButton'

export default function SignIn() {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session])

  return (
    <>
      <Head>
        <title>Faça seu Login | Learno</title>
      </Head>

      <main className={`${common.container} ${styles.boxContent}`}>
        <section className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img src="/images/logo.svg" alt="Learno" />
              </a>
            </Link>
          </div>
          <div className={styles.signIn}>
            <GoogleButton />
            <GithubButton />
            <span className={styles.separator}>or</span>
            <GuestButton />
          </div>
        </section>
      </main>
    </>
  )
}
