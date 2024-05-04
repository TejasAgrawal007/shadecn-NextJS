import { Button } from '@/components/ui/button'
import React from 'react'

function Home() {
  return (
    <div>
      <main className="h-screen flex justify-center items-center flex-col">
            <h1 className='text-3xl'>Home Page 🔥</h1>
            <Button variant={'chai'}>Chai Button</Button>
            <Button variant={'destructive'} size={'sm'}>ShadeCN Button</Button>
      </main>
    </div>
  )
}

export default Home
