import { google } from 'googleapis'

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SCHEME, HOST } = process.env
const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  `${SCHEME}://${HOST}/api/callback`
)

export { oauth2Client }
