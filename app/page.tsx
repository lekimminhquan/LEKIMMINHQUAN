'use client'
import { useRouter } from 'next/navigation'
import { URL_OVERVIEW_PAGE } from '@/components/constant/common'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace(URL_OVERVIEW_PAGE)
  }, [])

  return null
}
