
import React from 'react'
import RootLayout from '@/components/layouts/RootLayout'
import LoginForm from '@/components/admins/LoginForm'

export default function Login() {
  return (
    <RootLayout>
      <section className='my-5'>
      <LoginForm />
      </section>
    </RootLayout>
  )
}

