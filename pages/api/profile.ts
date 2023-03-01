import { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import { oauth2Client } from '@/auth/google'
import { GaxiosError } from 'gaxios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client })
  try {
    const r = await oauth2.userinfo.get()
    res.send(r.data)
  } catch (e: unknown) {
    if (e instanceof GaxiosError) {
      res.status(e.response!.status).end()
    } else {
      res.status(500).end()
    }
  }
}
