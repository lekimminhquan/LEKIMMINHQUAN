'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { URL_OVERVIEW_PAGE } from '@/components/constant/common'
export default function Home() {
  const router = useRouter()
  router.replace(URL_OVERVIEW_PAGE)
  
  return null
}
