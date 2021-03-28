import { FcGoogle } from 'react-icons/fc'

import { signIn } from 'next-auth/client'

import common from '../../styles/common.module.scss'

export function GoogleButton() {
  return (
    <button
      type="button"
      className={common.signInButton}
      onClick={() => signIn('google')}
    >
      <FcGoogle />
      Sign in with Google
    </button>
  )
}
