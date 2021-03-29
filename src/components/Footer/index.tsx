import Link from 'next/link'

import { FiHome, FiCheckSquare } from 'react-icons/fi'

import styles from './styles.module.scss'
import common from '../../styles/common.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${common.container} ${styles.footerContent}`}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.active}>
                  <FiHome />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/tasks">
                <a>
                  <FiCheckSquare />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
