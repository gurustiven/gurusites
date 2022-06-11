import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SettingsHomePage: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/settings/general')
  })
  return null
}

export default SettingsHomePage
