import { FaGithub } from 'react-icons/fa'

import { signIn } from 'next-auth/client'

import common from '../../styles/common.module.scss'

export function GithubButton() {
  return (
    <button
      type="button"
      className={common.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub />
      Sign in with Github
    </button>
  )
}
