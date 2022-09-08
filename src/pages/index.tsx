import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@components/common/button/button'

const Home: NextPage = () => {
  return (
    <>
      <Button width={'100px'} height={'50px'}>{'테스트 버튼'}</Button>
    </>
  )
}

export default Home