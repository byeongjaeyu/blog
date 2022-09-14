import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push('/main')
  },[])
  return (
    <></>
  )
}

export default Home
