import { NextApiRequest, NextApiResponse } from 'next'
import { oauth2Client } from '@/auth/google'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.code) {
    res.redirect('/')
    return
  }
  const code = req.query.code as string
  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)
  res.redirect('/profile')
}
