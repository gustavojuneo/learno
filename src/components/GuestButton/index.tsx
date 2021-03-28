import { FiUser } from 'react-icons/fi'

import common from '../../styles/common.module.scss'
import styles from './styles.module.scss'

export function GuestButton() {
  return (
    <button type="button" className={`${common.signInButton}`}>
      <FiUser />
      Continue as a guest
    </button>
  )
}
