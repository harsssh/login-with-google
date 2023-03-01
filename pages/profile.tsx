import { useEffect, useState } from 'react'
import { oauth2_v2 } from 'googleapis'
import Image from 'next/image'

type Profile = {
  name: string
  picture: string
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile>({ name: '', picture: '' })

  useEffect(() => {
    fetch('/api/profile')
      .then((r) => r.json())
      .then((r: oauth2_v2.Schema$Userinfo) => {
        setProfile({ name: r.name || '', picture: r.picture || '' })
      })
      .catch(() => console.log('error'))
  }, [])

  return (
    <div>
      {profile.name && <p>Hi {profile.name}!</p>}
      {profile.picture && (
        <Image
          src={profile.picture}
          priority={true}
          alt='picture'
          width={100}
          height={100}
        />
      )}
    </div>
  )
}
