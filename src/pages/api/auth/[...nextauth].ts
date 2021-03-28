import { query as q } from 'faunadb'

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email, name, image } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email)))
            ),
            q.Create(q.Collection('users'), { data: { email, name, image } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
          )
        )

        return true
      } catch {
        return false
      }
    }
  }
})
