"use server"

import dynamic from 'next/dynamic'
import React from 'react'

const LoginForm: any = dynamic(() => import('@/components/admins/LoginForm'), { ssr: false })

export default async function Login() {

  return (
    <>
    <LoginForm />
    </>
  )
}

