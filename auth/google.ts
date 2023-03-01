import { google } from 'googleapis'

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env
const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/api/callback'
)

export { oauth2Client }
