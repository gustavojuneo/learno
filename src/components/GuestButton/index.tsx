import { useRouter } from 'next/router'

import { FiUser } from 'react-icons/fi'
import Cookies from 'js-cookie'
import { signOut } from 'next-auth/client'

import common from '../../styles/common.module.scss'

export function GuestButton() {
  const router = useRouter()

  async function handleGuestSignIn() {
    signOut()
    Cookies.set('guest', 'guest_user')
  }

  return (
    <button
      type="button"
      className={`${common.signInButton}`}
      onClick={handleGuestSignIn}
    >
      <FiUser />
      Continue as a guest
    </button>
  )
}
