'use client'

import CardWrapper from '@/components/CardWrapper'
import { useRouter } from 'next/navigation'
import { FaCheckCircle } from 'react-icons/fa'

export default function RegisterSuccessPage() {
  const router = useRouter()
  return (
    <CardWrapper
      headerText='Registred successfully'
      subHeaderText='You can now login to the app'
      action={() => router.push('/login')}
      actionLabel='Go to Login'
      headerIcon={FaCheckCircle}
    />
  )
}
